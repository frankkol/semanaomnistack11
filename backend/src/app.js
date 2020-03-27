const express = require('express')
const cors = require('cors')
const { errors } = require('celebrate')
const routes = require('./routes')

const app = express()

app.use(cors()) //Import de camada de proteção com cors
app.use(express.json()) //Necessario para que as rotas interpretem request do tipo json
app.use(routes) //Import do arquivo de rotas para o Express
app.use(errors()) //Tratar erros de validação

module.exports = app