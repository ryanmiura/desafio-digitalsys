from django.contrib import admin
from django.urls import path, include
from .views import home

urlpatterns = [
    path('', home, name='home'),  # Nova rota para a página inicial
    path('admin/', admin.site.urls),
    path('api/', include('candidates.urls')),
]

# Comentário: Adicionada a rota para a página inicial
