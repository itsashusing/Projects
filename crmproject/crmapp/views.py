from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from .models import Record
from .form import EmpForm
# Create your views here.


@login_required
def home(request):
    total = None
    lst = list()
    records = Record.objects.all().order_by('-id')
    for i in range(1, len(records)+1):
        lst.append(i)
    if len(lst) >= 1:
        total = lst

    context = {
        'records': records,
        'lst': lst,
        'total': total[-1]
    }
    return render(request, 'crmapp/home.html', context)


def register(request):

    if request.method == 'POST':
        username = request.POST['username']
        first_name = request.POST['first-name']
        last_name = request.POST['last-name']
        password = request.POST['password']

        user = User(username=username, first_name=first_name,
                    last_name=last_name, password=password)
        user.set_password(user.password)
        user.save()
        return redirect('home')
    else:
        return render(request, 'registration/register.html')


@login_required
def delete(request, id):
    record = Record.objects.get(id=id)
    record.delete()
    return redirect('home')


@login_required
def details(request, id):
    mess = None
    record = None
    try:
        record = Record.objects.get(id=id)
    except:
        mess = {
            'mess': 'First Insert the Records'
        }

    return render(request, 'crmapp/details.html', {'record': record, 'mess': mess})


@login_required
def update(request, id):
    try:

        mess = None
        form = None
        record = Record.objects.get(id=id)
        if request.method == "POST":
            form = EmpForm(request.POST, instance=record)
            form.save()
            return redirect('details', id=id)
        else:
            form = EmpForm(instance=record)
    except:
        mess = {
            'mess': 'First Insert the Records'
        }

    return render(request, 'crmapp/update.html', {'form': form, 'mess': mess})


def addrecords(request):
    if request.method == 'POST':
        form = EmpForm(request.POST)
        form.save()
        return redirect('home')
    else:
        form = EmpForm()
    return render(request, 'crmapp/addrecords.html', {'form': form})
