const { Users } = require('./index');
const Messages = require('./index');

const getUsers = () => {
 Users.findAll()
    .then(users => {
        console.log(users, "USERS @@@@@@")
    })
    .catch(err => {
        console.log(err)
    })
  };

  getUsers();
  module.exports.getUsers = getUsers;
  