

<p align="center">
    <img src="https://github.com/user-attachments/assets/434deb03-d0b8-419d-814a-05410ed90825" alt="Summary">
</p>

## NLW Pocket

Esse é um projeto do evento NLW Pocket Javascript. </br>
O projeto é um site desktop de registro de metas com progresso semanal.

### Testando a aplicação

Requisitos:</br>
<ul>
  <li><a href="https://www.docker.com/products/docker-desktop/">Node.js</a></li>
  <li><a href="https://www.docker.com/products/docker-desktop/">Docker</a></li>
</ul>

</br>
Partindo do ponto que você já tenha baixado o projeto

## Passo 1

1. Instalar as depêndencias de cada projeto executando o commando ``` npm install ``` no terminal em cada pasta do projeto.
2. No backend executar nessa ordem:
   1. ```docker compose up -d``` </br>
      Esse comando disponibilizará um container com o banco de dados, o comando -d seguinifica que o docker ficará em segundo plano e não bloqueara o terminal
   2. ```npx drizzle-kit generate``` </br> Comando para gerar os scripts das tabelas para o banco de dados.
   3. ```npx drizzle-kit migrate``` </br> Comando para criar as tabelas no banco de dados
   4. ```npm run seed``` (Opcional) </br>
   Esse comando 
