Objetivo
Criar uma API Rest para acompanhamento do quadro clínico de pacientes de uma clínica veterinária.
Contexto
• A API possui as seguintes funcionalidades: registro de médico veterinário, registro de dono do pet, registro de pet, busca de pet, busca de dados de pet, registro de consultas e registro de procedimentos já realizados pelo pet.,
• Para que eu possa usar as funcionalidades, preciso fazer login como médico veterinário.,
• Para que o dono do pet possa consultar o histórico, ele precisa fazer login como dono do pet.,
• Donos de pet apenas consultam histórico, médicos veterinários acessam todas as funcionalidades do sistema.,
• O acompanhamento do quadro clínico é feito através da avaliação dos procedimentos realizados e das consultas já realizadas pelo pet.,
Regras
• Não me pergunte nada, só faça.,
• A documentação da API deve ser feita com Swagger, em forma de arquivo, crie esse arquivo em uma pasta de recursos. O swagger precisa descrever o modelo JSON da resposta de cada endpoint com base na forma que API for implementada. O Swagger também deve contemplar os status code de erro que serão implementados na API.,
• Adicione um endpoint para renderizar o Swagger.,
• Construa um arquivo README para descrever o projeto,
• Divida a API em camadas: routes, controllers, service e model,
• Armazene os dados da API em um banco de dados em memória,
• Utilize a biblioteca express para construir a API Rest,
• Faça com que a autenticação seja parte do Middleware, utilizando token JWT como modelo de autenticação, e implemente as regras de autenticação seguindo as informações descritas no contexto.