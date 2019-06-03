const { Users } = require('./index');
const { Messages } = require('./index');
const Sequelize = require('sequelize');
// const dummyMessages = require('../client/src/dummy-message-data');

const { Op } = Sequelize;

const getUsers = user => Users.findAll({ where: { id: { [Op.ne]: user.id } } }).then(results => ({ user, allUsers: results }));

// getUsers();
// helper to get all message from a user based on userId
const getConversation = (userAid, userBid) => Messages.findAll({
  where: {
    fromId: [userAid, userBid],
    toId: [userAid, userBid],
  },
  order: [['createdAt', 'ASC']],
});

const getInbox = userId => Messages.findAll({
  where: {
    [Op.or]: [{ toId: userId }, { fromId: userId }],
  },
  order: [['createdAt', 'ASC']],
}).then(messages => messages.reduce((userIds, m) => {
  if (m.fromId != userId && !userIds.includes(m.fromId)) userIds.push(m.fromId);
  if (m.toId != userId && !userIds.includes(m.toId)) userIds.push(m.toId);
  return userIds;
}, []));

// getConversation(9, 7);
// db findAll :

// WHERE
// fromUserId === userAid AND toUserId === userBid
// OR
// fromUserId === userBid AND toUserId === userAid

// SORT BY:
// createAt (most recent first)
const saveUser = user => Users.create(user);


const saveMessage = message => Messages.create(message);
//  saveMessage({contentType: "text", content: "I Don't think Chris is funny", fromId: 3, toId: 1})
// dummyMessages.forEach((message) => {
//     saveMessage(message);
// })
//  saveMessage(dummyMessages[4]);

module.exports.getUsers = getUsers;
module.exports.getConversation = getConversation;
module.exports.saveMessage = saveMessage;
module.exports.saveUser = saveUser;
module.exports.getInbox = getInbox;
