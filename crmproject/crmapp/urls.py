
from django.urls import path
from . import views
urlpatterns = [
    path('',views.home,name='home'),
    path('register/',views.register,name='register'),
    path('addrecords/',views.addrecords,name='addrecords'),
    path('emp/details/<int:id>/',views.details,name='details'),
    path('emp/update/<int:id>/',views.update,name='update'),
    path('emp/delete/<int:id>/',views.delete,name='delete'),

    
]
