const router = require('express').Router()
let { notes } = require('../db')
let id = 0

router.get('/notes', (req, res) => {

  res.json(notes)
})

router.get('*'), (req, res) => {
  res.json(notes)
}

router.post('/notes', (req, res) => {
  let newNote = {
    title: req.body.title,
    text: req.body.text,
    id: id++
  }
  notes.push(newNote)
  console.log(newNote)
  res.sendStatus(200)

})

router.delete('/notes/:id', (req, res) => {
  const id = parseInt(req.params.id)
  console.log(id)
  console.log(notes[id])
  notes = notes.filter(note => note.id !== id)
  res.sendStatus(200)
  // notes = notes.filter(note => note.id!=id)
})

module.exports = router