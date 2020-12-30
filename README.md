<h1 align="center">
  API REST - GameNews
  <img src="./Docs/gamenews.gif" />
</h1>

<p align="center">
 <a href="#sobre">Sobre</a> •
 <a href="#tecnologias">Tecnologias</a> • 
 <a href="#layout">Layout</a> • 
 <a href="#api">API</a> • 
 <a href="#licenca">Licença</a>
</p>

<div id="sobre"></div>

### 💡 Sobre

Esta é uma aplicação web que integra uma API Rest com o front-end para a criação, edição, exclusão e busca de games. Você pode cadastrar seu games preferidos e gerenciar como bem entender.

##### _**Adendo:**_
> A API pode ser utilizada para se trabalhar com qualquer outro conteúdo característico que segue o mesmo modelo de estrutura do exemplo, e nao apenas "games".

<div id="tecnologias"></div>

### 🛠 Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:

**Backend:**
- [PHP](https://www.php.net/)
- [Composer](https://getcomposer.org/)

**Frontend:**
- [jQuery](https://jquery.com/)
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Bootstrap](https://getbootstrap.com/)

<div id="layout"></div>

### 🔖 Layout

O layout da aplicação front-end foi construído utilizando bootstrap, consequentemente ele se encontra responsivo, adaptando-se ao desktop e mobile.

<div id="api"></div>

### 🧰 API

Esta API foi desenvolvida utilizado o conceito de REST, estabelecendo a transferência de dados usando o protocolo HTTP.

### Rotas:

- #### GET:

``` /gamenews/api/game ``` - Retorna todos os registros contigos no banco de dados.

``` /gamenews/api/game/:id ``` - Retorna o registro equivalente ao **id** passado como parâmetro, ou uma exception caso não haja nenhum registro com o **id** equivalente.

- #### POST:

``` /gamenews/api/game/ ``` - Cria um novo registro no banco de dados.

- #### PUT:

``` /gamenews/api/game/:id ``` - Atualiza um registro equivalente ao **id** passado como parâmetro com os dados enviados no _body_.

- #### DELETE:

``` /gamenews/api/game/:id ``` - Deleta do banco o registro equivalente ao **id** passado como parâmetro, ou uma _exception_ caso esse **id** não corresponda a nenhum registro.^

<div id="licenca"></div>

### 📝 Licença

Este projeto está sobe a licença [MIT](./LICENSE).

---