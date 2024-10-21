from django.http import HttpResponse

def home(request):
    return HttpResponse("Bem-vindo ao Sistema de Recrutamento Pegho!")

# Comentário: Esta é uma view simples para a página inicial
