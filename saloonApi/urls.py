from django.urls import path
from .views import  ServiceListCreateView,ServiceListView, ServiceRetrieveUpdateDestroyView, BookingListCreateView,BookingListView ,BookingRetrieveUpdateDestroyView, RegisterAPI,LoginAPI,UserListView
from . import views
from knox import views as knox_views
urlpatterns = [

    path('', views.index, name='index'),
    path('api/service/', ServiceListCreateView.as_view(), name='service-list-create'),
    path('api/services/', ServiceListView.as_view(), name='services'),
    path('api/service/<int:pk>/', ServiceRetrieveUpdateDestroyView.as_view(), name='service-detail'),
    path('api/booking/', BookingListCreateView.as_view(), name='booking-list-create'),
    path('api/bookings/', BookingListView.as_view(), name='bookings'),
    path('api/booking/<int:pk>/', BookingRetrieveUpdateDestroyView.as_view(), name='booking-detail'),
    path('api/register/', RegisterAPI.as_view(), name='register'),
    path('api/login/', LoginAPI.as_view(), name='login'),
    path('api/logout/', knox_views.LogoutView.as_view(), name='logout'),
    path('api/users/', UserListView.as_view(), name='userlist'),
    path('api/users/<int:pk>/', UserListView.as_view(), name='userlist'),
    # ... other URLs
]
