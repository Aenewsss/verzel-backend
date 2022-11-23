# VERZEL BACK 

## Passo a passo back end

- Por se tratar de um simples CRUD não era necessário utilizar toda a arquitetura do Nest, apesar de não ser uma má escolha. Por isso optei por utilizar o Express;
- A api está rodando no heroku, mas caso queria rodar a mesma localmente apenas insira npm run start:dev (watch com nodemon) ou npm start no seu terminal!
- No arquivo routes.js foi inserida nossas 2 rotas principais: '/' para açoes de qualquer usuário e '/admin' para usuários autenticados;
- Na pasta routes temos as rotas de admin, as quais necessitam de um middleware para verificar a existência de um usuário já autenticado (token jwt que vem do localStorage do nosso front) e as rotas main que são responsáveis por listar nossos veículos;
- É possível verificar que todas nossas rotas possuem controllers, pois segui o modelo de arquitetura MVC;
- Os controllers, na pasta app, são responsáveis por executar as querys no nosso banco de dados MONGODB;
- MongoDB utilizado para não precisarmos subir conteiners no docker e por ter a facilidade de comunicação, devido sua URI de conexão;
- O arquivo auth.js, na pasta middlewares, é responsável por verificar a existência do token jwt;
- A pasta models, como o próprio nome já diz, é responsável por setar o modelo dos nossos objetos no banco: Usuário e Carro;
- Pasta config apenas utilizada para instanciar nosso banco;

### OBS

- Variáveis de ambiente: 
MONGO_URL=mongodb+srv://verzel:aenaverzel100@verzel-database.cok1wdh.mongodb.net/verzel-database
JWT_TOKEN=7whd7w8dqw6dqwdgDasdasddasd78d