## Campos

* **id** - "CPF" da aplicação, identificador
* **titulo** - Nome do jogo
* **descricao** - Breve descrição do jogo
* **videoId** - Trailer do jogo

## Validação

* **id** = número > 0
* **titulo** = > 3 &&  <= 100 caracteres
* **descricao** = >= 10 && <= 250 caracteres
* **videoId** = != ""

## ENDPOINT

GET    = /game       | Retornar TODOS
GET    = /game/:id   | Retornar Game pelo ID
POST   = /game       | Criar um novo game
PUT    = /game/:id   | Altera um game
DELETE = /game/:id   | Delete um game