# Seredempia

## Aplicação WEB Seredempia (Client)

Esta aplicação tem como objetivo, possibilitar a um aluno fazer uma solicitação de compra de passagem de estudante a sua instituição de ensino, sua escola, então, por sua vez confirmar esta solicitação, se for adequada, e pôr fim a instituição de transporte visualizar esta solicitação, liberando assim a compra para o estudante e o bloqueando até o mês seguinte. Para fazer isso está aplicação se comunica com uma API REST desenvolvida em Node.JS + Express.

## Linguagens e Ferramentas

### Linguagens

*  De Marcação - HTML;

* De Folhas de Estilo - CSS;

* De Programação - Javascript.

### Ferramentas

* [Node.js 4.5.0](https://nodejs.org/en/);

* [NPM 2.15.9](https://www.npmjs.com/);

* [Http-Server 0.9.0](https://www.npmjs.com/package/http-server);

* [Angular.js 1.5.8](https://angularjs.org/);

* [Bootstrap 3.3.7](http://getbootstrap.com/);

* [Atom 1.12.0](https://atom.io/).

## Estrutura

Com o desenvolvimento desta aplicação foi criado um arquivo ```index.html``` que importa todas as bibliotecas e arquivos necessários para o funcionamento da aplicação e o arquivo ```app.js``` que cria o modulo da aplicação dentro do Angular.js e faz a injeção das bibliotecas utilizadas dentro do projeto. Esta aplicação pode ser dividida em 3 partes principais:

* ```Estudante```:

   Parte que gerencia as questões de um estudante dentro da aplicação, possuindo uma view onde este pode inserir seu CPF para fazer uma solicitação de liberação de compra de passagem, um controller onde as solicitações são tratadas e enviadas a um serviço adequado, e um serviço que envia as solicitações relacionadas a estudantes para a API Rest;

* ```Escola```:

   Parte que gerencia as questões de uma escola dentro da aplicação, possuindo uma view onde está pode confirmar solicitações de estudantes, um controller onde estas confirmações são tratadas e enviadas a um serviço adequado (Normalmente ao serviço de estudante), e um serviço que envia as requisições relacionadas à escola para a API Rest (Normalmente o LOG-IN da escola);

* ```Transporte```:

   Parte que gerencia as questões de um transporte dentro da aplicação, possuindo uma view onde esta  pode verificar as solicitações confirmadas por uma escola e, após o estudante realizar a compra, bloquear este estudante durante o mês, um controller onde estas verificações e bloqueios são tratados e enviados a um serviço adequado (Normalmente ao serviço de estudante), e um serviço que envia as requisições relacionadas ao transporte para a API Rest (Normalmente o LOG-IN do transporte).

Além destas 3 áreas a aplicação também possui outras partes que contribuem para o funcionamento destas áreas, são estas partes: Valores, Configurações, Interceptores, Diretivas e Filtros.

## Instalação

### Pré-Instalação

Para a instalação desta aplicação é necessario apenas a instalação de qualquer browser de navegação WEB recente e uma ferramenta para a criação do server para a aplicação. no desenvolvimento foram utilizados:

* [Google Chrome](https://www.google.com/chrome/browser/desktop/index.html) - Navegador;

* [Http-Server](https://www.npmjs.com/package/http-server) - Criação do servidor

Para a instalação do ```Http-Server``` é necessario também a instalção do [Node.js](https://nodejs.org/en/). Após a instalação da ferramenta deve ser feita a instalação do módulo ```Http-Server``` Globalmente  utilizando os seguintes comandos:

* ```npm install http-server -g```.

## Inicialização

Para inicializar o projeto basta entrar na pasta do projeto a partir do console do sistema operacional e digitar o seguinte comando:

```bash
npm start
```

## Utilização

Após a inicialização do sistema basta acessar sua [URL](http://127.0.0.1:8081), normalmente no endereço ```localhost``` porta ```8081``` e será possivel a utilização do site do sistema.
