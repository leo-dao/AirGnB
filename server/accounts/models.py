from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager
from listings.models import Listing
import uuid

class User(AbstractUser):

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    email = models.EmailField(max_length=254, unique=True)
    username = models.CharField(max_length=150)
    password = models.CharField(max_length=150)
    rating = models.IntegerField(default=-1)
    date_joined = models.DateTimeField(auto_now_add=True)
    is_active = models.BooleanField(default=True)


    # Optional fields
    #avatar = models.ImageField(upload_to='profile_pics', blank=True)
    location = models.CharField(max_length=150, blank=True)
    bio = models.TextField(max_length=500, blank=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'password']
