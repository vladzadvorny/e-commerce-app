import express from 'express'
import morgan from 'morgan'
import mongoose from 'mongoose'

import { isDev, DB_URL } from './constants'
import { CustomerRoutes } from './modules'

// database
mongoose.Promise = global.Promise
mongoose.set('debug', isDev)
mongoose.connection
  .on('error', error => console.log(error))
  .on('close', () => console.log('Database connection closed.'))
  .once('open', () => {
    const info = mongoose.connections[0]
    console.log(`Connected to ${info.host}:${info.port}/${info.name}`)
    // require('./mocks')();
  })
mongoose.connect(
  DB_URL,
  { useNewUrlParser: true }
)

// express
const app = express()
app.use(morgan(isDev ? 'dev' : 'common'))
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Welcome')
})

app.use('/api/v1/customers', CustomerRoutes)

app.listen(3001, err => {
  if (err) {
    console.error(err)
  } else {
    console.log(`Server listen on port 3000`)
  }
})
