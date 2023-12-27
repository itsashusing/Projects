from django import forms
from testapp.models import Movies

class AddMovies(forms.ModelForm):
    rdate=forms.DateField()
    name=forms.CharField()
    hero=forms.CharField()
    heroien=forms.CharField()
    class Meta:
        model = Movies
        fields = '__all__'
    