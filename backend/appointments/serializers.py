from rest_framework import serializers
from .models import Department, Doctor, Appointment
from datetime import date, timedelta

class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = '__all__'

class DoctorSerializer(serializers.ModelSerializer):
    photo_url = serializers.SerializerMethodField()

    class Meta:
        model = Doctor
        fields = ['id', 'name', 'photo', 'photo_url', 'department', 'description', 'available_days', 'start_time', 'end_time', 'active']

    def get_photo_url(self, obj):
        request = self.context.get('request')
        return request.build_absolute_uri(obj.photo.url) if obj.photo else None

class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = '__all__'

    def validate(self, data):
        doctor = data['doctor']
        today = date.today()
        requested = data['date']

        if requested <= today:
            raise serializers.ValidationError("Appointment must be booked at least one day in advance.")

        weekday = requested.strftime('%A')
        available = [d.strip() for d in doctor.available_days.split(',') if d.strip()]

        if weekday not in available:
            raise serializers.ValidationError("Doctor not available on selected day.")

        if doctor.start_time and doctor.end_time and data.get('time'):
            if not (doctor.start_time <= data['time'] <= doctor.end_time):
                raise serializers.ValidationError("Doctor not available at this time.")
        elif doctor.active and (not doctor.start_time or not doctor.end_time):
            if requested < today + timedelta(days=2):
                raise serializers.ValidationError("Doctor available only on appointment. Please contact reception at 02 226798585 for booking appointments")

        if data['department'] != doctor.department:
            raise serializers.ValidationError("Doctor and department mismatch.")

        if not doctor.active:
            raise serializers.ValidationError("Doctor is currently not available.")
        return data






# from rest_framework import serializers
# from .models import Department, Doctor, Appointment
# from datetime import date, timedelta

# class DepartmentSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Department
#         fields = '__all__'

# class DoctorSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Doctor
#         fields = '__all__'

# class AppointmentSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Appointment
#         fields = '__all__'

#     def validate(self, data):
#         doctor = data['doctor']
#         weekday = data['date'].strftime('%A')
#         available = [d.strip() for d in doctor.available_days.split(',')]

#         if weekday not in available:
#             raise serializers.ValidationError("Doctor not available on selected day.")

#         # ✅ Check time only if start and end time exist
#         if doctor.start_time and doctor.end_time and data.get('time'):
#             if not doctor.start_time <= data['time'] <= doctor.end_time:
#                 raise serializers.ValidationError("Doctor not available at this time.")
#         elif doctor.active and (not doctor.start_time or not doctor.end_time):
#             raise serializers.ValidationError("Start time and end time are required for active doctors.")

#         if data['department'] != doctor.department:
#             raise serializers.ValidationError("Doctor and department mismatch.")

#         if not doctor.active:
#             raise serializers.ValidationError("Doctor is currently inactive.")

#         return data

