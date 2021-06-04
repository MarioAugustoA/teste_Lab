Para começar 

1º rode o comando yarn para instalar as dependecias do projeto 

2º  deve ser criado um container que executa um banco de dados postgres 
-- docker run --name goLab_go -e POSTGRES_PASSWORD=docker -p 5432:5432

3* a conexão com o banco de dados esta no arquivo ormconfig.json
--nele se encontram o nome que deve ser usado ao criar o banco de dados e a senha

4* para acessar o postgres é possível utilizar o dbeaver
-- dentro do dbeaver clique em nova conexão
--cliqueem postgresSQL
-- host :localhost
-- selecione a porta que foi selecionada no docker run (neste caso foi utilizada a 6432)
--nome da database pode permanecer postgres
--user name pode permanecer postgres também
--password deve ser colocado docker pois foi essa senha utilizada na criação do container
-- na aba postgresSQL selecione a opção show all databases
-- clique em finish

5* para fazer os testes de criar e listar podemos utilizar o insominia
-- crie uma request de post e outra do tipo get
--no link da rota de post coloque http://localhost:3333/cadastros ou crie um environments que contenha esse link http e dps adicione o /cadastros no final do environment criado
--  na aba body mude para JSON
-- o formato para cadastrar um laboratório é este aqui:
    {
	"Laboratorio": "lab",
	"endereco":"rua 2",
	"status": "ativo",
	"date":"Timestamp => ISO-8601"
}
--lembre-se de deixar a request no tipo post
--para listar  basta criar outra requeste do tipo GET e na aba que esta no lado esquerdo da aba Auth, selecione No Body
-- o link da rota do tipo get é http://localhost:3333/cadastros 

* o mesmo deve ser feito para listar e cria os exames
* a rota dos exames é http://localhost:3333/exames 
* o formato do arquivo para cadastrar o exame é :
{
	"nome_id": "ba6f2e39-600a-46e2-9c33-4da78076a36c",
	"Name": "exame1",
	"tipo": "1",
	"status":"ativo"
}

Dependencias utilizadas form : express, typeorm, reflect-metadata