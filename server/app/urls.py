from django.urls import path
from .views import get_products_by_category

urlpatterns = [
    path('api/products/category', get_products_by_category, name='get_products_by_category'),
]
