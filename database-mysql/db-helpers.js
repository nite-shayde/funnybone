cost Users = require('./index');
cost Messages = require('./index');

const getUsers = () => {
    return Users.findAll();
  };


  module.exports.getUsers = getUsers;
  