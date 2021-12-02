# PAINEL DE ANALISE SETORIAL

### PAINEL DESENVOLVIDO COM POWER BI EMBED

#### Solucoes para incorporar Power BI

- Incorporar para seus clientes (app owns data): Permite criar um app de 
	autenticacao nao interativa no Power BI, onde o cliente sao usuarios externos 
	e nao precisam entrar usando credenciais do Power BI para visualizar 
	o conteudo incorporado.

- Incorporado para sua organizacao: permite criar um app que requer autenticacao 
	usando credenciais do Power BI. So permite os usuarios consumir o conteudo 
	incorporado ao qual eles tem acesso no servico Power BI.

#### Diferencas entre solucoes 

- Incorporado para seus clientes:

	1. Destinado a clientes externos
	2. Para autenticar use seu proprio metodo de autenticacao
	3. Usuarios do aplicativo nao precisam de uma licenca
	4. Autenticacao nao interativa, app usa uma entidade de servico ou 
		 um usuario mestre para autenticar

- Incorporado para sua organizacao

	1. Destinado a usuarios internos 
	2. Os usuarios do aplicativo se autenticam no Azure AD
	3. Cada usuario do app precisa de uma licenca do Power BI
	4. Autenticacao interativa, seu aplicativo usa as credenciais do usuario
		 para autenticar

#### Capacities

E o conjunto de recursos reservados para o uso exclusivo. permite publicar 
paineis, relatorios e conjunto de dados para usuarios, sem ter que comprar 
licencas por usuario. Tambem oferece desempenho confiavel e consistente 
para o seu conteudo. 

Existem dois tipos de ofertas de analise incorporada do Power BI, cada uma
exigindo uma capacity diferente:

- Power BI Embedded: Uma oferta do Azure que requer A SKUs e esta associada 
	ao embed para a solucao de seus clientes.

- Incorporacao com Power BI: Uma oferta do Microsoft Office que requer 
SKUs P ou EM.

#### API

As APIs de clientes se comunicam com um item do Power BI incorporado, o iframe 
cria uma separaca entre o app de hospedagem e o item do Power BI, garantindo
que os dados estejam protegidos.

- Conjunto de documentacao:
	
1. powerbi-client: A biblioteca pricipal do Power BI Client que inclui todas
as APIs do Power BI, exceto powerbi-report-authoring. Permite que voce controle
o conteudo que esta incorporado.

2. powerbi-models: Contem os modelos de objeto para as APIs do Power BI Client.
para cada modelo, ha uma interface TypeScript, uma definicao de esquema JSON e uma funcao de validacao para garantir que um determinado objeto seja um modelo 
valido.

3. powerbi-report-authoring: Uma extensao para criar recursos visuais e autorar
o relatorio depois de carregado. permite que voce edite programaticamente seus
relatorios incorporados.
 

