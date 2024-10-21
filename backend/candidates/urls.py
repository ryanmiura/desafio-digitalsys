from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import DadosPessoaisViewSet

router = DefaultRouter()
router.register(r'candidatos', DadosPessoaisViewSet)

urlpatterns = [
    path('', include(router.urls)),
]

# Comentário: Esse arquivo define as rotas para a API
# O router cria automaticamente as URLs para as operações CRUD
