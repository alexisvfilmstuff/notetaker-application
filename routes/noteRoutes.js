const router = require('express').Router()
let { notes } = require('../db')
let id = 0

router.get('api/notes', (req, res) => {

  res.json(notes)
})

router.post('api/notes', (req, res) => {
  let newNote = {
    title: req.body.title,
    text: req.body.text,
    id: id++
  }
  notes.push(newNote)
  console.log(newNote)
  res.sendStatus(200)

})

router.delete('api/notes/:id', (req, res) => {
  const id = parseInt(req.params.id)
  console.log(id)
  console.log(notes[id])
  notes = notes.filter(note => note.id !== id)
  res.sendStatus(200)
  // notes = notes.filter(note => note.id!=id)
})

router.get('notes'), (req, res) => {
  res.sendFile(path.join(__dirname, 'notes.html'))
})

router.get('*'), (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

module.exports = router

 