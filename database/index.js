const Sequelize = require('sequelize');

const sequelize = new Sequelize('funnybone', 'root', '', {
    host: 'localHost',
    dialect: 'mysql'
})

class Messages extends Sequelize.Model { }
Messages.init({
    fromUserId: Sequelize.INTEGER,
    toUserId: Sequelize.INTEGER,
    content: Sequelize.STRING,
    contentType: Sequelize.STRING,
}, { sequelize, modelName: 'messages' })

class Users extends Sequelize.Model { }
Users.init({
    name: Sequelize.STRING,
    userName: Sequelize.STRING,
    profilePic: Sequelize.STRING
}, { sequelize, modelName: 'users' })



sequelize.sync({
    force: true,
})
    .then(() => {
        console.log('Connected');
    });

// module.exports.sequelize = sequelize;
module.exports.Messages = Messages
module.exports.Users = Users;

