const express = require('express')
const { join } = require('path')

const app = express()

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())



app.get('/notes', (req, res) => {
  res.sendFile('/public/notes.html', {root:__dirname})
  console.log('test')
})

app.get('/api/notes', (req, res) => {
  console.log('hi')
})

app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'public/index.html'))
})

app.use(require('./routes'))

app.listen(process.env.PORT || 3000)
console.log('listening on port 3000')
