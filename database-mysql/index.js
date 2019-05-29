// this is where the database connection will happen 
const Sequelize = require('sequelize');

const host = 'localhost';
const user = 'root';
const port = 3306;
const password = '';
const database = 'joke-me-off';

const connection = new Sequelize(database, user, password, {
  dialect: 'mysql',
  host,
  port,
});

const Users = connection.define('users', {
    name: Sequelize.STRING,
    user_name: Sequelize.STRING,
    profile_pic: Sequelize.STRING.BINARY
})
const Messages = connection.define('messages', {
    text: Sequelize.STRING,
    from_id: Sequelize.INTEGER,
    to_id: Sequelize.INTEGER
})

connection.sync()
  .then((result) => {
    console.log(result, 'are we in the data??????');
  }).catch((err) => {
    console.log(err, '!!!!!!!!!!!!!');
  });

