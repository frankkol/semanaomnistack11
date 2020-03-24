const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const app = express()

app.use(cors()) //Import de camada de proteção
app.use(express.json()) //Necessario para que as rotas interpretem request do tipo json
app.use(routes) //Import do arquivo de rotas para o Express

app.listen(3333)