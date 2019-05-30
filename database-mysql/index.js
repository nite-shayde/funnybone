// this is where the database connection will happen 
const Sequelize = require('sequelize');
const dummyUserData = require('../client/src/dummy-user-data');

const host = 'localhost';
const user = process.env.DB_USER || 'root';
const port = 3306;
const password = '';
const database = 'jokeMeOff';

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
    profilePicURL: Sequelize.STRING 
})
const Messages = connection.define('messages', {
  contentType: Sequelize.STRING,
  content: Sequelize.STRING,
  fromId: Sequelize.INTEGER,
  toId: Sequelize.INTEGER
})

connection.sync({ force: false })
  .then((result) => {
    console.log(result, 'are we in the data??????');
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



