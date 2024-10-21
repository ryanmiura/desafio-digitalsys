from django.db import models

class DadosPessoais(models.Model):
    nome = models.CharField(max_length=100)
    data_nascimento = models.DateField()
    
    def __str__(self):
        return self.nome

class Contato(models.Model):
    candidato = models.OneToOneField(DadosPessoais, on_delete=models.CASCADE, related_name='contato')
    email = models.EmailField()
    telefone = models.CharField(max_length=20)
    endereco = models.TextField()
    
    def __str__(self):
        return f"Contato de {self.candidato.nome}"

class ExperienciaProfissional(models.Model):
    candidato = models.ForeignKey(DadosPessoais, on_delete=models.CASCADE, related_name='experiencias')
    cargo = models.CharField(max_length=100)
    empresa = models.CharField(max_length=100)
    data_inicio = models.DateField()
    data_fim = models.DateField(null=True, blank=True)
    descricao = models.TextField()
    
    def __str__(self):
        return f"{self.cargo} em {self.empresa}"

class FormacaoAcademica(models.Model):
    candidato = models.ForeignKey(DadosPessoais, on_delete=models.CASCADE, related_name='formacoes')
    instituicao = models.CharField(max_length=100)
    curso = models.CharField(max_length=100)
    data_inicio = models.DateField()
    data_fim = models.DateField(null=True, blank=True)
    
    def __str__(self):
        return f"{self.curso} em {self.instituicao}"

# Comentário: Esses modelos representam as informações básicas de um currículo
# Cada classe é uma tabela no banco de dados
# Os campos definem as colunas de cada tabela
