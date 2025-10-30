# API Clinica Veterinária

## Descrição
Este projeto é uma API REST para o acompanhamento do quadro clínico de pacientes de uma clínica veterinária. A API permite o registro e autenticação de usuários (médicos veterinários e donos de pets), além de gerenciar informações sobre pets e consultas.

## Estrutura do Projeto
```
vet-clinic-api
├── src
│   ├── app.js                # Ponto de entrada da aplicação
│   ├── config
│   │   └── db.js            # Configuração do banco de dados em memória
│   ├── controllers
│   │   ├── authController.js # Controlador para autenticação
│   │   └── patientController.js # Controlador para gerenciamento de pets
│   ├── middlewares
│   │   └── authMiddleware.js  # Middleware de autenticação
│   ├── models
│   │   ├── patient.js        # Modelo de dados para pets
│   │   └── user.js           # Modelo de dados para usuários
│   ├── routes
│   │   ├── authRoutes.js     # Rotas de autenticação
│   │   └── patientRoutes.js   # Rotas de gerenciamento de pets
│   ├── services
│   │   ├── authService.js     # Lógica de negócios para autenticação
│   │   └── patientService.js   # Lógica de negócios para gerenciamento de pets
│   └── docs
│       └── swagger.yaml       # Documentação da API em formato Swagger
├── package.json               # Configuração do npm
├── .env                       # Variáveis de ambiente
└── README.md                  # Documentação do projeto
```

## Instalação
1. Clone o repositório:
   ```
   git clone <URL_DO_REPOSITORIO>
   ```
2. Navegue até o diretório do projeto:
   ```
   cd vet-clinic-api
   ```
3. Instale as dependências:
   ```
   npm install
   ```

## Uso
1. Configure as variáveis de ambiente no arquivo `.env`.
2. Inicie o servidor:
   ```
   npm start
   ```
3. Acesse a API em `http://localhost:3000/api-docs/`.

## Funcionalidades
- Registro e autenticação de usuários (médicos veterinários e donos de pets).
- Registro e consulta de informações sobre pets.
- Registro de consultas e histórico de atendimentos.

## Documentação
A documentação da API está disponível em `src/docs/swagger.yaml`. Você pode usar ferramentas como Swagger UI para visualizar e testar os endpoints da API.