const { Users } = require('./index');
const { Messages } = require('./index');

const getUsers = () => {
 return Users.findAll()
  };

  // getUsers();
  //helper to get all message from a user based on userId 
//  const getConversation = (userAid, userBid) => {
//     Messages.findAll({ where: { 
//                         fromUserId: [ userAid, userBid], 
//                             toUserId: [userAid, userBid]
//                     } }).then(projects => {
//         // projects will be an array of Projects having the id 1, 2 or 3
//         // this is actually doing an IN query
//       })
      

//  }

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
// saveMessage({contentType: "text", content: "I Don't think Chris is funny", fromId: 3, toId: 1})

  module.exports.getUsers = getUsers;
  