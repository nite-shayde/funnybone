const { Users } = require('./index');
const { Messages } = require('./index');
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
// db findAll :

// WHERE
// fromUserId === userAid AND toUserId === userBid
// OR
// fromUserId === userBid AND toUserId === userAid

// SORT BY:
// createAt (most recent first)
const saveUser = (user) => {
   return Users.create(user)
}


//saveUser({name: "Chris", username: "chrisCorley", email: "chrisCorly@gmail.com", profilePicURL: "pizzahut.com"})
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


  