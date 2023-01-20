from django.db import models
from django.contrib.auth.models import User
from knox.models import AuthToken



class Service(models.Model):
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    def __str__(self):
        return "{} - {}".format(self.name, self.price)
    class Meta:
        verbose_name = "Service"
        verbose_name_plural = "Services"

class Booking(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    service = models.ForeignKey(Service, on_delete=models.CASCADE)
    date_booked = models.DateTimeField(auto_now_add=True)
    date_of_appointment = models.DateTimeField()

    def __str__(self):
        return "{} - {} - {} - {}".format(self.user, self.service, self.date_booked,self.date_of_appointment)
    class Meta:
        verbose_name = "Booking"
        verbose_name_plural = "Bookings"
