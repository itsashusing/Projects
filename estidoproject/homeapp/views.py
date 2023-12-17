from django.shortcuts import render
from homeapp.models import CardProduct,Banner,AboutUs
from django.core.paginator import Paginator
# Create your views here.
def home(request):
    cards=CardProduct.objects.all().order_by('?')
    banners=Banner.objects.all()

    paginator =Paginator(cards,8)
    page_number = request.GET.get("page")
    page_obj = paginator .get_page(page_number)

    context={
        'cards':cards,
        'banners':banners,
        'page_obj':page_obj
    }
    return render(request,'homeapp/home.html',context)

def aboutus(request):
    admin=AboutUs.objects.all()


    context={
        'admin':admin
    }
    return render(request, 'homeapp/aboutus.html',context)
