import request from 'supertest'
import { MongoHelper } from '../../infra/db/mongodb/helpers/mongo-helper'
import app from '../config/app'

describe('SignUp Routes', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  beforeEach(async () => {
    const accountCollection = MongoHelper.getCollection('accounts')
    await accountCollection.deleteMany({})
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  test('should return an account on success cors', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'Igor',
        email: 'igor@mail.com',
        password: '123',
        passwordConfirmation: '123'
      })
      .expect(200)
  })
})
