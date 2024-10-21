# Sistema de Recrutamento Pegho

Este projeto é um sistema de recrutamento desenvolvido para a empresa Pegho, permitindo que candidatos enviem suas informações de currículo de forma organizada.

## Estrutura do Projeto

O projeto está dividido em duas partes principais:

1. Backend (Django)
2. Frontend (React)

## Funcionalidades

- Formulário de currículo com seções para dados pessoais, contato, experiência profissional e formação acadêmica
- Validações de formulário no frontend
- API REST no backend para receber e armazenar os dados dos candidatos
- Interface de administração Django para gerenciar os dados dos candidatos

## Requisitos

- Python 3.8+
- Node.js 14+
- npm 6+

## Instalação e Execução

### Backend (Django)

1. Navegue até a pasta do backend:
   ```
   cd backend
   ```

2. Crie um ambiente virtual (opcional, mas recomendado):
   ```
   python -m venv venv
   source venv/bin/activate  # No Windows use `venv\Scripts\activate`
   ```

3. Instale as dependências:
   ```
   pip install -r requirements.txt
   ```

4. Execute as migrações:
   ```
   python manage.py migrate
   ```

5. Crie um superusuário para acessar a interface de administração:
   ```
   python manage.py createsuperuser
   ```

6. Inicie o servidor de desenvolvimento:
   ```
   python manage.py runserver
   ```

O backend estará rodando em `http://localhost:8000`.

### Frontend (React)

1. Navegue até a pasta do frontend:
   ```
   cd frontend
   ```

2. Instale as dependências:
   ```
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```
   npm start
   ```

O frontend estará rodando em `http://localhost:3000`.

## Uso

1. Acesse `http://localhost:3000` em seu navegador para usar o sistema de recrutamento.
2. Preencha o formulário com suas informações pessoais, contato, experiência profissional e formação acadêmica.
3. Envie o formulário. Os dados serão validados no frontend e, se estiverem corretos, serão enviados para o backend.
4. Para acessar a interface de administração e visualizar os dados enviados, acesse `http://localhost:8000/admin` e faça login com as credenciais do superusuário criado anteriormente.

## API

A API do backend está disponível em `http://localhost:8000/api/`. Você pode usar esta URL base para fazer requisições para o backend.