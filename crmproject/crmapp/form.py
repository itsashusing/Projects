from .models import Record
from django import forms


class EmpForm(forms.ModelForm):
    class Meta:
        model = Record
        fields = '__all__'
