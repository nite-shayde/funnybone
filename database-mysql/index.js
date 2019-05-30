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
    userName: { 
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
  })
  .catch((err) => {
    console.log(err, '!!!!!!!!!!!!!');
  });

  Users.bulkCreate([
  {
    name: 'Kalkidan',
    userName: 'KalkidanMulatu',
    email: 'kalki@gmail.com',
    profilePicURL: 'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-0/p110x80/48359292_220566528875309_249279966284349440_n.jpg?_nc_cat=104&_nc_ht=scontent-dfw5-1.xx&oh=c87c3905e336d7235594112d4b2d3db0&oe=5D91B150' 
  },
  {
    name: 'Kelly',
    userName: 'KellyT',
    email: 'kelly@gmail.com',
    profilePicURL: 'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-0/p110x80/48359292_220566528875309_249279966284349440_n.jpg?_nc_cat=104&_nc_ht=scontent-dfw5-1.xx&oh=c87c3905e336d7235594112d4b2d3db0&oe=5D91B150' 
  },
  {
    name: 'Ezra',
    userName: 'EzraMoges',
    email: 'ezuyea@gmail.com',
    profilePicURL: 'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-0/p110x80/48359292_220566528875309_249279966284349440_n.jpg?_nc_cat=104&_nc_ht=scontent-dfw5-1.xx&oh=c87c3905e336d7235594112d4b2d3db0&oe=5D91B150' 
  }
], {
  validate: true,
  ignoreDuplicates: true,
})
  .then(user => {
    console.log(user.dataValues);
  })

  module.exports.connection = connection;
  module.exports.Messages = Messages;
  module.exports.Users = Users;



