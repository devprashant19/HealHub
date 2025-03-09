from django.shortcuts import render,HttpResponse,redirect,get_object_or_404
from datetime import datetime
from home.models import Contact
from django.contrib import messages
from .forms import SignUpForm
from django.contrib.auth import login, authenticate
from django.contrib.auth.forms import AuthenticationForm
from .models import Doctor
from rest_framework.response import Response
from rest_framework.views import APIView

class ExampleAPI(APIView):
    def get(self, request):
        data = {
            "message": "Hello, this is data from the Django API!",
            "status": "success",
        }
        return Response(data)


# Create your views here.
def index(request):
    
    return render(request,"hi.html")
    #return HttpResponse("this is home page")#when we have to give string use Http response but ideally use template
def about(request):
    return render(request,"about.html")
    
def ser(request):
    return render(request,"services.html")
    
def contact(request):
   if request.method == 'POST':
        name= request.POST.get('name')
        email= request.POST.get('email')
        phone= request.POST.get('phone')
        desc= request.POST.get('desc')
        contact= Contact(name=name,email=email,phone=phone,desc=desc,date=datetime.today())
        contact.save()
        messages.success(request, "Your messages have been send...")
   return render(request,'contact.html')




def signup_view(request):
    if request.method == 'POST':
        form = SignUpForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect('home')
    else:
        form = SignUpForm()
    return render(request, 'signup.html', {'form': form})
    
def login_view(request):
    if request.method == 'POST':
        form = AuthenticationForm(request, data=request.POST)
        if form.is_valid():
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password')
            user = authenticate(request, username=username, password=password)
            if user is not None:
                login(request, user)
                return redirect('home')
    else:
        form = AuthenticationForm()
    return render(request, 'login.html', {'form': form})


Doctor

def consult_doctor_view(request, doctor_id):
    doctor = get_object_or_404(Doctor, id=doctor_id)
    return render(request, 'consult_doctor.html', {'doctor': doctor})


    from django.shortcuts import render, redirect
from .models import Doctor, Appointment
from django.contrib.auth.decorators import login_required

@login_required
def book_appointment_view(request, doctor_id):
    doctor = get_object_or_404(Doctor, id=doctor_id)
    if request.method == 'POST':
        appointment_time = request.POST['appointment_time']
        Appointment.objects.create(
            patient=request.user,
            doctor=doctor,
            appointment_time=appointment_time
        )
        return redirect('home')
    return render(request, 'book_appointment.html', {'doctor': doctor})




