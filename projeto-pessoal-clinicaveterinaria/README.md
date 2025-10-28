# Projeto de Acompanhamento Clínico Veterinário

Este projeto é uma API REST desenvolvida em Node.js para o acompanhamento do quadro clínico de pacientes de uma clínica veterinária. A API permite o registro e busca de informações sobre pacientes, incluindo médicos veterinários, donos de pets, pets, consultas e procedimentos.

## Funcionalidades

- Registro de médicos veterinários, donos de pets e pets.
- Registro de consultas e procedimentos.
- Busca de informações sobre pets.
- Autenticação via token JWT.
- Documentação da API utilizando Swagger.

## Estrutura do Projeto

```
projeto-pessoal-clinicaveterinaria
├── src
│   ├── app.js                  # Ponto de entrada da aplicação
│   ├── config
│   │   └── db.js              # Configuração do banco de dados
│   ├── controllers
│   │   └── pacienteController.js # Controlador para gerenciar pacientes
│   ├── middlewares
│   │   └── authMiddleware.js   # Middleware de autenticação
│   ├── models
│   │   └── paciente.js         # Modelo de dados para pacientes
│   ├── routes
│   │   └── pacienteRoutes.js    # Rotas da API para pacientes
│   ├── services
│   │   └── pacienteService.js   # Lógica de negócios para pacientes
│   ├── utils
│   │   └── jwt.js              # Funções utilitárias para JWT
│   └── docs
│       └── swagger.yaml        # Documentação da API em Swagger
├── package.json                # Configuração do npm
└── README.md                   # Documentação do projeto
```

## Instalação

1. Clone o repositório:
   ```
   git clone https://github.com/AnaCRROssi/projeto-pessoal-clinicaveterinaria.git
   ```

2. Navegue até o diretório do projeto:
   ```
   cd projeto-pessoal-clinicaveterinaria
   ```

3. Instale as dependências:
   ```
   npm install
   ```

## Uso

Para iniciar a aplicação, execute o seguinte comando:

```
npm start
```

A API estará disponível em `http://localhost:3000`.

## Documentação da API

A documentação da API pode ser acessada em `src/docs/swagger.yaml`. Utilize ferramentas como Swagger UI para visualizar e interagir com os endpoints da API.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

## Licença

Este projeto está licenciado sob a Licença ISC.