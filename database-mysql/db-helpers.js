const { Users, Messages, Interests, UsersInterests } = require('./index');
const Sequelize = require('sequelize');
// const dummyMessages = require('../client/src/data/dummy-message-data');

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

/**
 * This function gets the inbox for a particular user. Its finds
 * all the messages where the toId and fromId contain the userID.
 * After that, they are pushed into an userIds array whether, the
 * messages toId and fromId doesn't equal the userId
 */
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

// find the id of a given interests by its name in the database
const findInterestsId = intName => Interests.findAll({ where: { name: intName } }).then(int => int.id)

// pulls User id from user in database by their email
const findUserId = email => Users.findOne({ where: { email } }).then(user => user.id);

// stores Users Interests in join table
const storeUsersInterests = (userDbId, intDbId) => 
  UsersInterests.findOrCreate({ // creates a join table with unique values for movieId and userId
    where: { userId: userDbId, interestId: intDbId },
    defaults: { userId: userDbId, interestId: intDbId },
  });

// store unique values of Interests
const storeInterests = intName => Interests.findOrCreate({ where: { name: intName }, defaults: { name: intName } })

const pullUsersInterests = userDbId => 
  UsersInterests.findAll({ // find all movieId's stored on join table tied to given user id
    attributes: ['interestId'],
    where: { userId: userDbId },
  });

module.exports.getUsers = getUsers;
module.exports.getConversation = getConversation;
module.exports.saveMessage = saveMessage;
module.exports.saveUser = saveUser;
module.exports.getInbox = getInbox;
module.exports.storeInterests = storeInterests;
module.exports.storeUsersInterests = storeUsersInterests;
module.exports.findInterestsId = findInterestsId;
module.exports.findUserId = findUserId;
module.exports.pullUsersInterests = pullUsersInterests;
