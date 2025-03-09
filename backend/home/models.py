from django.db import models
from django.contrib.auth.models import User
# Create your models here.
#it defines our database
#makemigrations -> creates and store in a file
#migrate -> apply the pending changes (db.sqllite)
class Contact(models.Model):#creating a table
    name=models.CharField(max_length=122)
    email=models.CharField(max_length=122)
    phone=models.CharField(max_length=122)
    desc=models.TextField()
    date=models.DateField()
#for doctor
class Doctor(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    specialty = models.CharField(max_length=100)
    bio = models.TextField()
    available_times = models.JSONField()  # or any other field to store availability

    def __str__(self):
        return self.user.username


#For appointments
class Appointment(models.Model):
    patient = models.ForeignKey(User, on_delete=models.CASCADE)
    doctor = models.ForeignKey(Doctor, on_delete=models.CASCADE)
    appointment_time = models.DateTimeField()

    def __str__(self):
        return f'{self.patient.username} - {self.doctor.user.username} at {self.appointment_time}'

