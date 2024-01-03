<<<<<<< HEAD
from django.contrib import admin
from .models import Cart,CartItem
# Register your models here.
class CartItemAdmin(admin.ModelAdmin):
    list_display=['product','quantity']

admin.site.register(Cart)
admin.site.register(CartItem,CartItemAdmin)
=======
from django.contrib import admin
from .models import Cart,CartItem
# Register your models here.
class CartItemAdmin(admin.ModelAdmin):
    list_display=['product','quantity']

admin.site.register(Cart)
admin.site.register(CartItem,CartItemAdmin)
>>>>>>> 1b920148f1a38f4fbf6aa142e7f7c9e4481a5ad6
