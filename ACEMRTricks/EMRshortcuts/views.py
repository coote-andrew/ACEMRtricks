from django.contrib.auth import authenticate, login, logout
from django.db import IntegrityError
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render
from django.urls import reverse

# Create your views here.
def index(request):
    return render(request, "EMRshortcuts/index.html")


def handoverShortcut(request):
    return render(request, "EMRshortcuts/handover.html")

def handoverShortcutCustom(request):

    return render(request, "EMRshortcuts/handoverCustom.html")