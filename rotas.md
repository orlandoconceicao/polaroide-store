# API Endpoints

## Autenticação

### Cadastro de usuário

POST

/api/register/


Body (JSON):

{
    "username": "usuario1",
    "email": "usuario1@email.com",
    "password": "senha123"
}


---

### Login

POST

/api/login/


Body (JSON):

{
    "username": "usuario1",
    "password": "senha123"
}


Resposta:

{
    "access": "token",
    "refresh": "token"
}


---

# Fotos

## Upload de imagem

POST

/api/upload/


Header:

Authorization: Bearer TOKEN


Body (multipart/form-data):

arquivo: imagem.jpg


---

## Listar fotos

GET

/api/images/


Header:

Authorization: Bearer TOKEN


Resposta:

[
    {
        "id": 1,
        "imagem": "/media/imagem.jpg",
        "data_upload": "2026-06-27T10:00:00Z"
    }
]


---

# Pedidos

## Criar pedido

POST

/api/orders/


Body (JSON):

{
    "nome_cliente": "João",
    "telefone": "999999999",
    "endereco": "Rua A",
    "quantidade": 10,
    "pagamento": "PIX"
}


---

## Listar pedidos

GET

/api/orders/


Header:

Authorization: Bearer TOKEN


Resposta:

[
    {
        "id": 1,
        "nome_cliente": "João",
        "telefone": "999999999",
        "endereco": "Rua A",
        "quantidade": 10,
        "pagamento": "PIX",
        "status": "Pendente"
    }
]


---

# Resumo dos endpoints

| Método | Endpoint       | Função         |
|--------|----------------|----------------|
| POST   | /api/register/ | Criar usuário  |
| POST   | /api/login/    | Gerar JWT      |
| POST   | /api/upload/   | Enviar imagem  |
| GET    | /api/images/   | Listar imagens |
| POST   | /api/orders/   | Criar pedido   |
| GET    | /api/orders/   | Listar pedidos |