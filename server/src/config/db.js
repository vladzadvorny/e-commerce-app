import mongoose from 'mongoose'

import { DB_URL, isDev } from '../constants'

mongoose.Promise = global.Promise

mongoose.set('debug', isDev)

try {
  mongoose.connect(
    DB_URL,
    {
      useNewUrlParser: true
    }
  )
} catch (error) {
  mongoose.createConnection(DB_URL, {
    useNewUrlParser: true
  })
}

mongoose.connection
  .once('open', () => console.log('MongoDB running'))
  .on('error', e => {
    console.log('error', e)
  })
