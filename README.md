
# Como rodar o projeto

## 1. Clonar o projeto
Para começar, clone esse repositório na sua máquina em um local de sua preferência

``git clone <url do repositório>``

## 2. Conectar seu banco de dados
Navegue até *./backend* e crie um arquivo *.env* e adicione a seguinte variável:

``DATABASE_URL=<connection string>``

Para mais informações sobre connection strings acesse [aqui](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases/connect-your-database-typescript-postgresql)

## 3. Conectar o backend com frontend

Apesar de já estar previamente configurada, pode ser que você encontre problemas, portanto, navegue até *./frontend* e acesse o arquivo *.env*.

Nele, você encontrará a variável *NEXT_PUBLIC_API_BASE_URL*, caso a url do seu servidor local do backend não seja o valor atual da variável, altere para a url correta.

## 4. Instalar dependências

Rode o seguinte comando na raiz da pasta frontend e backend:

``yarn``
ou
``npm install``

## 5. Rodar o projeto

Navegue até a pasta backend e rode o seguinte comando:

``yarn dev`` ou ``npm run dev``

Repita o processo para a pasta frontend.

Acesse http://localhost:3000/ no seu navegador de preferência.

