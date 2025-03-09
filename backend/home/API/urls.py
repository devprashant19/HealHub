from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import ContactViewSet


contact_router = DefaultRouter()
contact_router.register('contact', ContactViewSet, basename='contact')