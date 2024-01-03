<<<<<<< HEAD
from django.db import models
from store.models import Product
# Create your models here.


class Cart(models.Model):
    cart_id = models.CharField(max_length=10)
    date_added = models.DateField(auto_now_add=True)


class CartItem(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE)
    quantity = models.IntegerField()
    is_active = models.BooleanField(default=True)

    def sub_total(self):
        if self.product.sale_price:
            return self.quantity*self.product.sale_price
        else:
            return self.quantity*self.product.price
=======
from django.db import models
from store.models import Product
# Create your models here.


class Cart(models.Model):
    cart_id = models.CharField(max_length=10)
    date_added = models.DateField(auto_now_add=True)


class CartItem(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE)
    quantity = models.IntegerField()
    is_active = models.BooleanField(default=True)

    def sub_total(self):
        if self.product.sale_price:
            return self.quantity*self.product.sale_price
        else:
            return self.quantity*self.product.price
>>>>>>> 1b920148f1a38f4fbf6aa142e7f7c9e4481a5ad6
