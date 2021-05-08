from django.contrib import admin
from .models import Pages
# Register your models here.

class PagesAdmin(admin.ModelAdmin):
    list_display = ('title', 'text')

admin.site.register(Pages, PagesAdmin)