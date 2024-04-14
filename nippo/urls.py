from django.urls import path,include
from .views import Kisaifoods

urlpatterns = [
  
  path("Kisaifoods/"   ,Kisaifoods, name="Kisaifoods"),
  
]