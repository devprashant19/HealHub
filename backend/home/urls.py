from django.contrib import admin
from django.urls import path
from home import views
from .views import ExampleAPI
#Here we are defining teh URL pattren that will Match
urlpatterns = [
    path("",views.index, name = 'home'),
    path("about",views.about, name ='about'),
    path("services",views.ser, name ='services'),
    path("contact",views.contact,name ='contact'),
    path('signup/', views.signup_view, name='signup'),
    path('login/', views.login_view, name='login'),
    path('consult/<int:doctor_id>/', views.consult_doctor_view, name='consult_doctor'),
    path('book_appointment/<int:doctor_id>/', views.book_appointment_view, name='book_appointment'),
    path('api/data/', ExampleAPI.as_view(), name='data_api'),
]
