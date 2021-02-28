# cadastraUsuarios
API em node para cadastrar usuários da atividade 2 de web2

## Requisições
Listar Usuários:   GET http://localhost:3000/usuarios
- Lista todos os usuários cadastrados

Obter Usuário:     GET http://localhost:3000/usuarios/:id
- Retorna um usuário com base no id passado na URL

Cadastrar Usuário: POST http://localhost:3000/usuarios
- Cria um usuário baseado nos dados passados no body da requisição ex:
- {
	"nome": "Will",
	"email": "will.smith@gmail.com",
	"endereco": "251 North Bristol Avenue"
}

Editar Usuário:    PUT http://localhost:3000/usuarios/:id
- Edita o usuário com o id informado na URL caso exista com os dados passados no body da requisição:
- PUT http://localhost:3000/usuarios/0
- {
	"nome": "William Smith",
	"email": "will.smith@gmail.com",
	"endereco": "251 North Bristol Avenue"
}

Remover Usuário:   DELETE http://localhost:3000/usuarios/:id
- Deleta o usuário com o id informado
