const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()
const config = require('./util/config')

// * Config app
app.set('port', config.PORT)
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// * Router
app.use('/api/consulta', require('./routes/consulta.routes'))

module.exports = app
