from django.urls import path
from django.conf.urls import include, url
from . import views

urlpatterns = [
    url(r"^accounts/", include("django.contrib.auth.urls")),
    path('register', views.register, name='register'),
]