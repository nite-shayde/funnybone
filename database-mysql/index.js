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

  Users.create({
    name: 'Kalkidan',
    userName: 'KalkidanMulatu',
    profilePic: 'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-0/p110x80/48359292_220566528875309_249279966284349440_n.jpg?_nc_cat=104&_nc_ht=scontent-dfw5-1.xx&oh=c87c3905e336d7235594112d4b2d3db0&oe=5D91B150' 
  })
  Users.create({
    name: 'Kelly',
    userName: 'KellyT',
    profilePic: 'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-0/p110x80/48359292_220566528875309_249279966284349440_n.jpg?_nc_cat=104&_nc_ht=scontent-dfw5-1.xx&oh=c87c3905e336d7235594112d4b2d3db0&oe=5D91B150' 
  })
  Users.create({
    name: 'Ezra',
    userName: 'EzraMoges',
    profilePic: 'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-0/p110x80/48359292_220566528875309_249279966284349440_n.jpg?_nc_cat=104&_nc_ht=scontent-dfw5-1.xx&oh=c87c3905e336d7235594112d4b2d3db0&oe=5D91B150' 
  })


  module.exports.connection = connection;
  module.exports.Messages = Messages;
  module.exports.Users = Users;


