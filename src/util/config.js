const dotenv = require('dotenv')

dotenv.config()

module.exports = {
  PORT: process.env.PORT || 3000,
  SERVER: process.env.SERVER || 'online03',
  DATABASE: process.env.DATABASE || 'tbase',
  HOST: process.env.HOST || '10.0.1.143',
  SERVICE: process.env.SERVICE || '1530',
  UID: process.env.UID || 'informix',
  PASS: process.env.PASS || 'informix1'
}
