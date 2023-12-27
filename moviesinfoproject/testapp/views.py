from django.shortcuts import render
from testapp.form import AddMovies
from testapp.models import Movies
# Create your views here.

def movies(request):
    return render(request,'index.html')

def add(request):
    done=False
    if request.method=='POST':
        form=AddMovies(request.POST)
        if form.is_valid():
            form.save(commit=True)
            done=True
            print('Record submitted successfully......')
    form=AddMovies()
    return render(request,'addmovies.html',{'form':form,'done':done})

def list(request):
    movies_list=Movies.objects.all()
    return render(request,'movies.html',{'movies_list':movies_list})