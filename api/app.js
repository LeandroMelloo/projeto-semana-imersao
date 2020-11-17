const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')

const porta = 8080
const url = `http://localhost:8080`

require('./model/home')
const home = mongoose.model('Home')

require('./model/contato')
const contato = mongoose.model('Contato')

const app = express()

app.use(express.json())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE')
    res.header('Access-Control-Allow-Headers', 'X-PINGOTHER, Content-Type, Authorization')
    app.use(cors())
    next()
})

mongoose.connect(`mongodb://localhost:27017/home`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log(`Conexão com o BD MongoDB realizada com sucesso.`)
}).catch(err => {
    console.log(`Conexão com o BD MongoDB não realizada com sucesso: ${err}.`)
})

app.get('/', (req, res) => {
    res.json({ name: `Leandro Moreira Paulino de Mello`, idade: 35})
})

app.get('/home', async (req, res) => {
    await home.findOne({}).then((home) => {
        return res.json({
            error: false,
            home
        })
    }).catch(err => {
        return res.status(400).json({
            error: true,
            message: `Nenhum registro encontrado: ${err}`
        })
    })
})

app.post('/home', async (req, res) => {
    const homeExiste = await home.findOne({})

    if(homeExiste) {
        return res.status(400).json({ 
            error: true,
            message: `Este registro já existe na collection homes.`
        })
    }

    await home.create(req.body, (err) => {
        if(err) return res.status(400).json({ 
            error: true,
            message: `Conteúdo da página home não cadastrado com sucesso: ${err}`
        })

        return res.json({
            error: false,
            message: `Conteúdo da página home cadastrado com sucesso.`
        })
    })
})

app.post('/contato', async (req, res) => {
    await contato.create(req.body, (err) => {
        if(err) return res.status(400).json({
            error: true,
            message: `Conteúdo da página contato não cadastrado com sucesso: ${err}`
        })
    })

    return res.json({
        error: false,
        message: `Conteúdo da página contato cadastrado com sucesso.`
    })
})

app.listen(8080, () => {
    console.log(`Servidor iniciado na porta ${porta}: ${url}.`)
})