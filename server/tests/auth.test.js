import request from 'supertest';
import app from '../index.js'; 
import db from '../config/dbConnection.js'; 

describe('User Authentication API', () => {
  beforeAll((done) => {
   
    db.connect((err) => {
      if (err) {
        console.error('Error connecting to database:', err);
        process.exit(1);
      }
      console.log('Connected to the database');
      done();
    });
  });

  afterAll((done) => {
   
    db.end((err) => {
      if (err) {
        console.error('Error closing database connection:', err);
        process.exit(1);
      }
      console.log('Database connection closed');
      done();
    });
  });

  it('should register a new user', async () => {
    const userData = {
      name: 'John Doe',
      company: 'Acme Inc.',
      email: 'john.doe@example.com',
      password: 'password123'
    };

    const response = await request(app)
      .post('/auth/register')
      .send(userData);

    expect(response.status).toBe(201);
    expect(response.body.msg).toBe('The user has been registered with us!');
  });

  it('should not register a user with an existing email', async () => {
    const existingUserData = {
      name: 'Jane Doe',
      company: 'Acme Inc.',
      email: 'jane.doe@example.com',
      password: 'password123'
    };

    const response = await request(app)
      .post('/auth/register')
      .send(existingUserData);

    expect(response.status).toBe(409);
    expect(response.body.msg).toBe('This email is already in use!');
  });
});
