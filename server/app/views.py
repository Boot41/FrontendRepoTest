from django.http import JsonResponse
from .models import Product

# Create your views here.

def get_products_by_category(request):
    category = request.GET.get('category')
    products = Product.objects.filter(category=category)
    product_list = [{'id': product.id, 'name': product.name, 'description': product.description, 'price': str(product.price)} for product in products]
    return JsonResponse(product_list, safe=False)
