<<<<<<< HEAD
from django.urls import path
from . import views

urlpatterns = [

    path('', views.home,name='home'),
    path('category/<slug:category_slug>/', views.home,name='category'),
    path('product/<slug:category_slug>/<slug:product_slug>/', views.product_details,name='product_details'),
=======
from django.urls import path
from . import views

urlpatterns = [

    path('', views.home,name='home'),
    path('category/<slug:category_slug>/', views.home,name='category'),
    path('product/<slug:category_slug>/<slug:product_slug>/', views.product_details,name='product_details'),
>>>>>>> 1b920148f1a38f4fbf6aa142e7f7c9e4481a5ad6
]