const router = require('express').Router()

router.use('/api', require('./notesRoutes.js'))

module.exports = router