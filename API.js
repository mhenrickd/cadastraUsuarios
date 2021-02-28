const port = 3000
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(express.json())
app.use(bodyParser.json())
app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})

var usuario = []          

const geraId = {
    _id: 0,
    get id() {
        return this._id++
    }
}

function buscaUsuario(id) {
    for (i in usuario) {
        if (id == usuario[i].id){
            return usuario[i]
        }
    }
    return("usuário não encontrado")
}

function criarUsuario(id, nome, email, endereco){
    usuario[id] = {id: id, nome: nome, email: email, endereço: endereco}
}

app.get('/usuarios', (req, res) => {
    res.send(Object.values(usuario))
})

app.get('/usuarios/:id', (req, res) => {
    res.send(buscaUsuario(req.params.id))
})

app.post('/usuarios', (req, res) => {
    idUsuario = geraId.id
    criarUsuario(idUsuario, req.body.nome, req.body.email, req.body.endereco)
    res.send(usuario)
})

app.put('/usuarios/:id', (req, res) => {
    id = parseInt(req.params.id)
    editar = buscaUsuario(id)
    if (editar != "usuário não encontrado") {
        criarUsuario(id, req.body.nome, req.body.email, req.body.endereco)
        res.send(usuario)
    } else {
        res.send("usuário não encontrado")
    }
})

app.delete('/usuarios/:id', (req, res) => {
    id = parseInt(req.params.id)
    deletar = (buscaUsuario(id))
    if (deletar != "usuário não encontrado") {
        delete usuario[id]
        res.send(usuario)
    } else {
        res.send("usuário não encontrado")
    }
})

