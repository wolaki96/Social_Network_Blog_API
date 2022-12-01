const connection = require('../config/connection');
const { Comment, User } = require('../models');
const { users, comments} = require('./user');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Dropping comments
  await Comment.deleteMany({});

  // Drop existing uesrs
  await User.deleteMany({});

  //add users
    await User.collection.insertMany(users);
  //add comments
  await Comment.collection.insertMany(comments);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});