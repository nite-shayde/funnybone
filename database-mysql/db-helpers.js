const { Users } = require('./index');
const { Messages } = require('./index');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const dummyMessages = require('../client/src/dummy-message-data');

const getUsers = () => {
 return Users.findAll()
  };

  // getUsers();
  //helper to get all message from a user based on userId 
 const getConversation = (userAid, userBid) => {
    return Messages.findAll({ 
      where: { 
        fromId: [ userAid, userBid], 
            toId: [userAid, userBid]
        }, 
        order: [['createdAt', "ASC"]] 
      });

 }
// getConversation(9, 7);

const generateHash = (password) => { 
  let salt = bcrypt.genSaltSync(saltRounds);
  return bcrypt.hashSync(password, salt);
}

// const validatePassword = (password) => {
//   return bcrypt.compareSync(password, generateHash(password));
// }

const saveUser = (user) => {
   return Users.create(user)
}

//saveUser({name: "Chris", username: "chrisCorley", email: "chrisCorly@gmail.com", password: generateHash("password123"), profilePicURL: "pizzahut.com"})
const saveMessage = (message) => {
  return  Messages.create(message)
}
//  saveMessage({contentType: "text", content: "I Don't think Chris is funny", fromId: 3, toId: 1})
// dummyMessages.forEach((message) => {
//     saveMessage(message);
// })
//  saveMessage(dummyMessages[4]);

module.exports.getUsers = getUsers;
module.exports.getConversation = getConversation;
module.exports.saveMessage = saveMessage;
module.exports.saveUser = saveUser;
module.exports.generateHash = generateHash;
module.exports.validatePassword = validatePassword;



  