from rest_framework.viewsets import ModelViewSet
from ..models import Contact
from .serializer import ContactSerializer
class ContactViewSet(ModelViewSet):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer