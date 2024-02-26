const express = require('express')
const cors = require('cors')

const app = express()
const PORTA = 3333
app.use(cors())

app.use(express.json())

app.get('/ola', function(request, response) {
  response.json({ message: 'Começou o backend'})
})

app.listen(PORTA, console.log(`Rodando servidor na porta: ${PORTA}`))
