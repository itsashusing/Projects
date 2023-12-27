from django.contrib import admin
from testapp.models import Movies


class MoviesAdmin(admin.ModelAdmin):
    list_display = ['rdate', 'name', 'hero', 'heroien']

admin.site.register(Movies,MoviesAdmin)
