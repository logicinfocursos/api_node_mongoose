const router = require('express').Router()

const sericeRouter = require('./services')

router.use('/', sericeRouter)

module.exports = router