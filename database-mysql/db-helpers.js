const { Users } = require('./index');
const { Messages } = require('./index');

const getUsers = () => {
 Users.findAll()
    .then(users => {
        console.log(users, "USERS @@@@@@")
    })
    .catch(err => {
        console.log(err)
    })
  };

  // getUsers();
 const getConversation = (userAid, userBid) => {

 }

// db findAll :

// WHERE
// fromUserId === userAid AND toUserId === userBid
// OR
// fromUserId === userBid AND toUserId === userAid

// SORT BY:
// createAt (most recent first)
const saveUser = (user) => {
    Users.create(user)
    .then((user) => {
        console.log(user)
    }).catch((err) => {
        console.log(err)
    });
}

//saveUser({name: "Chris", username: "chrisCorley", email: "chrisCorly@gmail.com", profilePicURL: "pizzahut.com"})
const saveMessage = (message) => {
    Messages.create(message)
    .then((message) => {
        console.log(message)
    }).catch((err) => {
        console.log(err)
    });

}
saveMessage({contentType: "text",
    content: "I Don't think Chris is funny",
    fromId: 3,
    toId: 1})
  module.exports.getUsers = getUsers;
  