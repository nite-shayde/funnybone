// this is where the database connection will happen 
const Sequelize = require('sequelize');

const host = 'localhost';
const user = 'root';
const port = 3306;
const password = '';
const database = 'jokeMeOff';

const connection = new Sequelize(database, user, password, {
  dialect: 'mysql',
  host,
  port,
});

const Users = connection.define('users', {
    name: Sequelize.STRING,
    userName: Sequelize.STRING,
    profilePic: Sequelize.STRING 
})
const Messages = connection.define('messages', {
  contentType: Sequelize.STRING,
  content: Sequelize.STRING,
  fromId: Sequelize.INTEGER,
  toId: Sequelize.INTEGER
})

connection.sync()
  .then((result) => {
    console.log(result, 'are we in the data??????');
  }).catch((err) => {
    console.log(err, '!!!!!!!!!!!!!');
  });

  module.exports.connection = connection;
  module.exports.Messages = Messages;
  module.exports.Users = Users;


