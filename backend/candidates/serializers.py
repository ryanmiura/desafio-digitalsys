from rest_framework import serializers
from .models import DadosPessoais, Contato, ExperienciaProfissional, FormacaoAcademica

class ContatoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contato
        fields = ['email', 'telefone', 'endereco']

class ExperienciaProfissionalSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExperienciaProfissional
        fields = ['cargo', 'empresa', 'data_inicio', 'data_fim', 'descricao']

class FormacaoAcademicaSerializer(serializers.ModelSerializer):
    class Meta:
        model = FormacaoAcademica
        fields = ['instituicao', 'curso', 'data_inicio', 'data_fim']

class DadosPessoaisSerializer(serializers.ModelSerializer):
    contato = ContatoSerializer()
    experiencias = ExperienciaProfissionalSerializer(many=True)
    formacoes = FormacaoAcademicaSerializer(many=True)

    class Meta:
        model = DadosPessoais
        fields = ['id', 'nome', 'data_nascimento', 'contato', 'experiencias', 'formacoes']

    def create(self, validated_data):
        contato_data = validated_data.pop('contato')
        experiencias_data = validated_data.pop('experiencias')
        formacoes_data = validated_data.pop('formacoes')
        
        dados_pessoais = DadosPessoais.objects.create(**validated_data)
        Contato.objects.create(candidato=dados_pessoais, **contato_data)
        
        for experiencia_data in experiencias_data:
            ExperienciaProfissional.objects.create(candidato=dados_pessoais, **experiencia_data)
        
        for formacao_data in formacoes_data:
            FormacaoAcademica.objects.create(candidato=dados_pessoais, **formacao_data)
        
        return dados_pessoais

# Comentário: Esses serializers convertem os modelos em JSON e vice-versa
# Isso é útil para a API REST
