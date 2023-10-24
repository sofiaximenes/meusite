const express = require('express')
const app = express()
const port = 3000

app.get('/meu-site', (req, res) => {
  res.send('<h1> Meu site! </h1>')
})
app.get('/meus-fornecedores', (req, res) => {
    res.send('Meus fornecedores!')
  })
app.get('/meus-clientes', (req, res) => {
    res.send('Meus clientes!')
  })
  
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
