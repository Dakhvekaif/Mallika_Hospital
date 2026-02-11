from rest_framework import serializers
from .models import Department, Doctor, Appointment
from datetime import date, timedelta

class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = '__all__'

class DoctorSerializer(serializers.ModelSerializer):
    photo_url = serializers.SerializerMethodField()
    # New field for UI display only
    display_available_days = serializers.SerializerMethodField()

    class Meta:
        model = Doctor
        fields = [
            'id', 'name', 'photo', 'photo_url', 'department', 
            'description', 'available_days', 'display_available_days', 
            'start_time', 'end_time', 'active'
        ]

    def get_photo_url(self, obj):
        request = self.context.get('request')
        return request.build_absolute_uri(obj.photo.url) if obj.photo else None

    def get_display_available_days(self, obj):
        days = obj.available_days or ""
        # Professional UI cleanup: Monday to Saturday
        full_week = "Monday, Tuesday, Wednesday, Thursday, Friday, Saturday"
        if days.strip() == full_week:
            return "Monday to Saturday"
        return days

class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = '__all__'

    def validate(self, data):
        doctor = data['doctor']
        today = date.today()
        requested = data['date']

        # 1. Advance Booking Check
        if requested <= today:
            raise serializers.ValidationError(
                "Appointments must be scheduled at least one day in advance. "
                "Please select a future date for your visit."
            )

        # 2. Day Availability Check
        weekday = requested.strftime('%A')
        available = [d.strip() for d in doctor.available_days.split(',') if d.strip()]

        if weekday not in available:
            raise serializers.ValidationError(
                f"Dr. {doctor.name} is not scheduled for consultations on {weekday}. "
                f"Please review the doctor's available days and select a different date."
            )

        # 3. Time Availability Check
        if doctor.start_time and doctor.end_time and data.get('time'):
            if not (doctor.start_time <= data['time'] <= doctor.end_time):
                raise serializers.ValidationError(
                    f"The requested time is outside of Dr. {doctor.name}'s consultation hours. "
                    f"Please choose a slot between {doctor.start_time.strftime('%I:%M %p')} "
                    f"and {doctor.end_time.strftime('%I:%M %p')}."
                )
        elif doctor.active and (not doctor.start_time or not doctor.end_time):
            if requested < today + timedelta(days=2):
                raise serializers.ValidationError(
                    "This doctor is available by special appointment only. "
                    "Please contact our reception desk at 02 226798585 to coordinate a booking."
                )

        # 4. Consistency Checks
        if data['department'] != doctor.department:
            raise serializers.ValidationError(
                "The selected doctor is not associated with this department. "
                "Please verify your selection."
            )

        if not doctor.active:
            raise serializers.ValidationError(
                f"Dr. {doctor.name} is currently unavailable for bookings. "
                "Please check back later or contact the hospital for more information."
            )

        return data