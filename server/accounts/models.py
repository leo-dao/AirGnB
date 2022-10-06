from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager
from listings.models import Listing
import uuid

class UserAccountManager(BaseUserManager):
    def create_user(self, email, username, password=None):
        if not email:
            raise ValueError('Users must have an email address')
        if not username:
            raise ValueError('Users must have a username')

        user = self.model(
            email=self.normalize_email(email),
            username=username,
        )

        user.set_password(password)
        user.save(using=self._db)
        return user
    
    def create_superuser(self, email, username, password):
        user = self.create_user(
            email=self.normalize_email(email),
            password=password,
            username=username,
        )
        user.is_admin = True
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user
    
    def delete_user(self, user):
        user.delete()
        return user

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
    REQUIRED_FIELDS = ['username', 'password', 'rating', 'id', 'date_joined']


    objects = UserAccountManager()

    def has_perm(self, perm, obj=None):
        return self.is_admin

    def __str__(self):
        return self.email
    
    def get_id(self):
        return self.id

    def get_username(self):
        return self.username

    def get_rating(self):
        return self.rating
    
    # Get all listings that the user has posted
    def get_listings(self):
            return Listing.objects.filter(leaser=self)