import { MongoHelper } from '../infra/db/mongodb/helpers/mongo-helper'
import 'dotenv/config'
import env from './config/env'

MongoHelper.connect(env.mongoUrl)
  .then(async () => {
    const app = (await import('./config/app')).default
    app.listen(process.env.PORT, () => console.log(`Server running at http://localhost:${process.env.PORT}`))
  })
  .catch(console.error)
