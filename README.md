

<p align="center">
    <img src="https://github.com/user-attachments/assets/434deb03-d0b8-419d-814a-05410ed90825" alt="Summary">
</p>

# NLW Pocket

Esse é um projeto do evento NLW Pocket Javascript. </br>
O projeto é um site desktop de registro de metas com progresso semanal.

### Ferramentas usadas
<div styles="flex">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="60" height="60"/>
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vitejs/vitejs-original.svg" alt="vitejs" width="60" height="60"/>
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" alt="docker" width="60" height="60"/>
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="60" height="60"/>
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg" alt="tailwindcss" width="60" height="60"/>
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/fastify/fastify-original.svg" alt="fastify" width="60" height="60"/>
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="60" height="60"/>
    <img src="https://zod.dev/logo.svg" alt="zod" width="60" height="60"/>
    <img src="https://raw.githubusercontent.com/drizzle-team/drizzle-orm/c8359a16fff4b05aff09445edd63fc65a7430ce9/misc/readme/logo-github-sq-dark.svg" alt="" width="120" height="60"/>
</div>
          

## Testando a aplicação

Requisitos:</br>
<ul>
  <li><a href="https://nodejs.org/en">Node.js</a></li>
  <li><a href="https://www.docker.com/products/docker-desktop/">Docker</a></li>
</ul>

</br>

## Passo 1

1. Instalar as dependências do backend executando o commando ``` npm install ``` no terminal na pasta do projeto.
2. Após instalar as dependências no backend executar nessa ordem:
   1. Criar um arquivo na raiz do projeto chamado .env e colar ```DATABASE_URL="postgresql://docker:docker@localhost:5432/inorbit"``` </br> Essa linha irá permitir a coneção com o banco de dados.
   2. ```docker compose up -d``` </br>
      Esse comando disponibilizará um container com o banco de dados, o comando -d seguinifica que o docker ficará em segundo plano e não bloqueara o terminal
   3. ```npx drizzle-kit generate``` </br> Comando para gerar os scripts das tabelas para o banco de dados.
   4. ```npx drizzle-kit migrate``` </br> Comando para criar as tabelas no banco de dados
   5. ```npm run seed``` (Opcional) </br>
   Esse comando é opcional pelo fato que ele irá gerar dados para fins de teste, você poderá criar seu proprios objetivos para testar a aplicação.
    6. ```npm run dev``` </br> Inicia o server

## Passo 2

1. Instalar as depêndencias do frontend executando o commando ``` npm install ``` no terminal na pasta do projeto.
2. ```npm run dev``` e abrir no link http://localhost:5173/
   
