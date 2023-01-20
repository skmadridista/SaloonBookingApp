from django.test import TestCase, Client
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase, APIClient
from django.contrib.auth import get_user_model
from .models import Service, Booking

class RegisterTest(APITestCase):
    def setUp(self):
        self.client = APIClient()
        self.user_data = {
            'username': 'testuser',
            'password': 'testpassword',
            'email': 'testuser@example.com',
        }

    def test_register(self):
        response = self.client.post(reverse('register'), self.user_data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(get_user_model().objects.count(), 1)
        self.assertEqual(get_user_model().objects.get().username, 'testuser')

class LoginTest(APITestCase):
    def setUp(self):
        self.client = APIClient()
        self.user = get_user_model().objects.create_user(
            username='testuser',
            password='testpassword',
            email='testuser@example.com',
        )

    def test_login(self):
        response = self.client.post(reverse('login'), {'username': 'testuser', 'password': 'testpassword'})
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('token', response.data)


class ServiceTests(APITestCase):
    def setUp(self):
        self.client = APIClient()
        self.user = get_user_model().objects.create_user(
            username='testuser',
            password='testpassword',
            email='testuser@example.com',
        )
        self.service_data = {'name': 'Haircut', 'price': 20}
        self.service = Service.objects.create(**self.service_data)

    def test_create_service(self):
        self.client.force_authenticate(user=self.user)
        response = self.client.post(reverse('service-list-create'), self.service_data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Service.objects.count(), 2)
        self.assertEqual(Service.objects.get(name='Haircut').price, 20)

    def test_update_service(self):
        self.client.force_authenticate(user=self.user)
        new_data = {'name': 'Haircut and beard', 'price': 30}
        response = self.client.put(reverse('service-detail', kwargs={'pk': self.service.pk}), new_data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(Service.objects.get(pk=self.service.pk).name, 'Haircut and beard')


class BookingTests(APITestCase):
    def setUp(self):
        self.client = APIClient()
        self.user = get_user_model().objects.create_user(
            username='testuser',
            password='testpassword',
            email='testuser@example.com'
        )
      
        self.service = Service.objects.create(name='Haircut', price=20)
        self.booking_data = {'date_of_appointment': '2022-01-01', 'service': self.service.pk}
        self.booking = Booking.objects.create(user=self.user, **self.booking_data)

    def test_create_booking(self):
        self.client.force_authenticate(user=self.user)
        response = self.client.post(reverse('booking-list-create'), self.booking_data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Booking.objects.count(), 1)
        self.assertEqual(Booking.objects.get().service.name, 'Haircut')
        self.assertEqual(Booking.objects.get().date_of_appointment.strftime('%Y-%m-%d %H:%M:%S'), '2022-01-01 10:00:00')
