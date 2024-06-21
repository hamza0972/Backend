require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('<h1>Hello</h1>')
})

app.get('/twitter', (req, res) => {
    res.send('This is Twitter Page.')
  })

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})