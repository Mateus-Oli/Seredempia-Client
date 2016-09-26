# Seredempia

##Aplicação WEB Seredempia (Client)

Esta aplicação tem como objetivo, possibilitar a um aluno fazer uma solicitação de compra de passagem de estudante a sua instituição de ensino, sua escola, então, por sua vez confirmar esta solicitação, se for adequada, e pôr fim a instituição de transporte visualizar esta solicitação, liberando assim a compra para o estudante e o bloqueando até o mês seguinte. Para fazer isso está aplicação se comunica com uma API REST desenvolvida em Node.JS + Express. No desenvolvimento desta aplicação estão sendo utilizadas as linguagens:

    • De Marcação - HTML;

    • De Folhas de Estilo - CSS;

    • De Programação - Javascript.

Junto a estas linguagens também estão sendo usadas as ferramentas:

    • Node.js 4.5.0;

    • NPM 2.15.9;

    • Http-Server 0.9.0;

    • Angular.js 1.5.8;

    • Bootstrap 3.3.7;

    • Atom 1.12.0.

Com o desenvolvimento desta aplicação foi criado um arquivo "index.html" que importa todas as bibliotecas e arquivos necessários para o funcionamento da aplicação e o arquivo "app.js" que cria o modulo da aplicação dentro do Angular.js e faz a injeção das bibliotecas utilizadas dentro do projeto. Esta aplicação pode ser dividida em 3 partes principais:

   •	Estudante:

   Parte que gerencia as questões de um estudante dentro da aplicação, possuindo uma view onde este pode inserir seu CPF para fazer uma solicitação de liberação de compra de passagem, um controller onde as solicitações são tratadas e enviadas a um serviço adequado, e um serviço que envia as solicitações relacionadas a estudantes para a API Rest;

   •	Escola:

   Parte que gerencia as questões de uma escola dentro da aplicação, possuindo uma view onde está pode confirmar solicitações de estudantes, um controller onde estas confirmações são tratadas e enviadas a um serviço adequado (Normalmente ao serviço de estudante), e um serviço que envia as requisições relacionadas à escola para a API Rest (Normalmente o LOG-IN da escola);

   •	Transporte:

   Parte que gerencia as questões de um transporte dentro da aplicação, possuindo uma view onde esta  pode verificar as solicitações confirmadas por uma escola e, após o estudante realizar a compra, bloquear este estudante durante o mês, um controller onde estas verificações e bloqueios são tratados e enviados a um serviço adequado (Normalmente ao serviço de estudante), e um serviço que envia as requisições relacionadas ao transporte para a API Rest (Normalmente o LOG-IN do transporte).

Além destas 3 áreas a aplicação também possui outras partes que contribuem para o funcionamento destas áreas, são estas partes:

    •	Valores: Adiciona valores fixos dentro da aplicação, como a URL da API cuja qual a aplicação ira se comunicar;

    •	Configurações: Adiciona as rotas da aplicação (possibilitando a criação de uma single-page-application) e
    adiciona interceptadores de requisições Http;

    •	Interceptadores: Possibilitam a alteração de diversas requisições Http e assim podendo-se criar timestamp's
    para estas requisições;

    •	Diretivas: Sobrecarrega funções do HTML, possibilitando assim a criação de mascaras (CPF e CNPJ) e novas
    "<tags>" (ui-Helper), entre outras coisas;

    •	Filtros: Transformam valores para facilitação de sua leitura (CPF, CNPJ, Nomes, Meses, Status).
