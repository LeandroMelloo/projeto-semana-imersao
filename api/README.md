SEQUENCIA PARA CRIAR O PROJETO

Criar o arquivo package
### npm init

Gerencia as requesições, rotas, e URLs, entre outra funcionalidades
### npm install express

Instalar o módulo para reiniciar o servidor sempre que houver alteração no código fonte, g significa globalmente
### npm install -g nodemon

Instalar o banco de dados MongoDB
### npm install mongodb --save

Instalar o Mongoose - Mongoose traduz os dados do banco de dados para objetos 
Javascript para que possam ser utilizados pela aplicação.
### npm install --save mongoose

Permitir acesso a API
### npm install --save cors

Gerar o backup dp banco de dados MongoDB
### mongodump --db home --out C:\Users\leandropaulino\Downloads\DB_MONGO

Restaurar o backup do banco de dados MongoDB
### mongorestore --db home C:\Users\leandropaulino\Downloads\DB_MONGO\home