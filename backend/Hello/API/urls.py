from rest_framework.routers import DefaultRouter
from home.API.urls import contact_router
from django.urls import path,include

router = DefaultRouter()
#home
#comments 
#text
router.registry.extend(contact_router.registry) 

urlpatterns = [
    path('',include(router.urls)),
    
]
