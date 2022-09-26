from django.db import models
import uuid


class Listing(models.Model):

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=150)
    description = models.TextField(max_length=500)
    category = models.CharField(max_length=150)
    price = models.DecimalField(max_digits=8, decimal_places=2)

    leaser = models.ForeignKey('accounts.User', on_delete=models.CASCADE)
    renter = models.ForeignKey('accounts.User', on_delete=models.CASCADE, null=True, blank=True)

    is_active = models.BooleanField(default=True)
    date_posted = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)
    date_rented = models.DateTimeField(null=True, blank=True)
    date_returned = models.DateTimeField(null=True, blank=True)

    #image = models.ImageField(upload_to='listing_pics', blank=True)
    #location = models.ForeignKey(Location, on_delete=models.CASCADE)


