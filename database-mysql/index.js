// this is where the database connection will happen
require('dotenv').config();
const Sequelize = require('sequelize');
const dummyUserData = require('../client/src/data/dummy-user-data');

const host = process.env.DB_HOST || 'localhost';
const user = process.env.DB_USER || 'root';
const port = process.env.DB_PORT || 3306;
const password = process.env.DB_PASSWORD || '';
const database = process.env.DB_DATABASE || 'jokeMeOff';

const connection = new Sequelize(database, user, password, {
  dialect: 'mysql',
  host,
  port,
});

const Users = connection.define('users', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  username: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  bio: Sequelize.STRING(500),
  password: Sequelize.STRING,
  profilePicURL: Sequelize.STRING(500),
});
const Messages = connection.define('messages', {
  contentType: Sequelize.STRING,
  content: Sequelize.STRING,
  fromId: Sequelize.INTEGER,
  toId: Sequelize.INTEGER,
});

connection.sync({ force: true })
  .then((result) => {
    console.log(result, 'connected to', database);
    // Users.bulkCreate(dummyUserData)
    // .then(user => {
    //   console.log(user.dataValues);
    // })
  })
  .catch((err) => {
    console.log(err, '!!!!!!!!!!!!!');
  });


module.exports.connection = connection;
module.exports.Messages = Messages;
module.exports.Users = Users;
