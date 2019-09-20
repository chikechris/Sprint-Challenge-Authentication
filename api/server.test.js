const request = require('supertest');
const db = require('../database/dbConfig.js');

const server = require('./server.js');

describe('auth-route.js', () => {
  afterAll(async () => {
    await db('users').truncate();
  });

  describe("POST /api/auth/register", () => {
    it('should return a 201 ok status code when a unique usernamen is registered', () => {
      return request(server)
        .post('/api/auth/register')
        .send({ username: 'greatness', password: 'greatness' })
        .expect(201)
    })
    it('should return a 500 status code when given a username that is already taken', () => {
      return request(server)
        .post('/api/auth/register')
        .send({ username: 'greatness', password: 'taken' })
        .expect(201)
    })
  })
})