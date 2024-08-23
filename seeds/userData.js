const { User } = require('../models');

const userData = [
  {
    username: 'johndoe',
    email: 'john@example.com',
    password: 'password123',
  },
  {
    username: 'janedoe',
    email: 'jane@example.com',
    password: 'password123',
  },
  // Add more users as needed
];

const seedUsers = () =>
  User.bulkCreate(userData, {
    individualHooks: true, // Ensures passwords are hashed
    returning: true,
  });

module.exports = seedUsers;
