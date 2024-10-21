from django.contrib import admin
from .models import DadosPessoais, Contato, ExperienciaProfissional, FormacaoAcademica

class ContatoInline(admin.StackedInline):
    model = Contato

class ExperienciaProfissionalInline(admin.StackedInline):
    model = ExperienciaProfissional
    extra = 1

class FormacaoAcademicaInline(admin.StackedInline):
    model = FormacaoAcademica
    extra = 1

@admin.register(DadosPessoais)
class DadosPessoaisAdmin(admin.ModelAdmin):
    inlines = [ContatoInline, ExperienciaProfissionalInline, FormacaoAcademicaInline]
    list_display = ('nome', 'data_nascimento')
    search_fields = ('nome',)

# Comentário: Esse arquivo configura a interface de administração do Django
# Ele permite gerenciar os dados dos candidatos de forma fácil
