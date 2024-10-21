from rest_framework import viewsets
from .models import DadosPessoais
from .serializers import DadosPessoaisSerializer

class DadosPessoaisViewSet(viewsets.ModelViewSet):
    queryset = DadosPessoais.objects.all()
    serializer_class = DadosPessoaisSerializer

# Comentário: Essa view permite operações CRUD para DadosPessoais
# Ela usa o DadosPessoaisSerializer para converter entre JSON e objetos Python
