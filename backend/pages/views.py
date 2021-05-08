from django.shortcuts import render
from rest_framework import viewsets
from .serializers import PagesSerializer
from .models import Pages

# Create your views here.
class PagesView(viewsets.ModelViewSet):
    serializer_class = PagesSerializer
    queryset = Pages.objects.all()