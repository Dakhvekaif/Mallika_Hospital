from rest_framework import serializers
from .models import Department, Doctor, Appointment

class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = '__all__'

class DoctorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doctor
        fields = '__all__'

class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = '__all__'

    def validate(self, data):
        doctor = data['doctor']
        weekday = data['date'].strftime('%A')
        available = [d.strip() for d in doctor.available_days.split(',')]
        
        active = data.get('active', True)
        start_time = data.get('start_time')
        end_time = data.get('end_time')

        if active and (not start_time or not end_time):
            raise serializers.ValidationError("Start time and end time are required for active doctors.")




        # Only log warnings instead of raising errors
        if weekday not in available:
            print(f"⚠️ Warning: Booking on {weekday} which is not in doctor availability: {available}")

        if not doctor.start_time <= data['time'] <= doctor.end_time:
            print(f"⚠️ Warning: Time {data['time']} not within {doctor.start_time} - {doctor.end_time}")

        if data['department'] != doctor.department:
            raise serializers.ValidationError("Doctor and department mismatch.")

        if not doctor.active:
            raise serializers.ValidationError("Doctor is currently inactive.")

        return data

























# from calendar import weekday
# from rest_framework import serializers
# from .models import Department, Doctor, Appointment

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
#         if not doctor.start_time <= data['time'] <= doctor.end_time:
#             raise serializers.ValidationError("Doctor not available at this time.")
#         if data['department'] != doctor.department:
#             raise serializers.ValidationError("Doctor and department mismatch.")
#         if not doctor.active:
#             raise serializers.ValidationError("Doctor is currently inactive.")
#         return data
