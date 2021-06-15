
from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("handover", views.handoverShortcut, name="handover"),
    path("handovercustom", views.handoverShortcutCustom, name="handovercustom"),
]