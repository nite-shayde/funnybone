import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Inbox(props) {
  const {
    user, allUsers, mainViewUser, changeView,
  } = props;

  const [convoIds, setConvoIds] = useState([]);

  const usersById = allUsers.filter(user => convoIds.includes(user.id))
    .reduce((userNames, user) => {
      userNames[user.id] = user;
      return userNames;
    }, {});

  function handleClick(e) {
    const { id } = e.target;
    changeView('dm', usersById[id]);
  }

  useEffect(() => {
    axios.get(`api/message/${user.id}`).then((response) => {
      setConvoIds(response.data);
    }).catch((err) => {

    });
  }, [convoIds.length]);

  return (
    <div className="">

      {allUsers.filter(user => convoIds.includes(user.id))
        .map(user => <Convo handleClick={handleClick} user={user} key={user.username} />)}

    </div>

  );
}

function Convo(props) {
  const { user, handleClick } = props;

  return (
    <div className="d-flex flex-row mb-2" onClick={handleClick} id={user.id}>
      <img className="img-xxs mx-2 rounded shadow" src={user.profilePicURL} id={user.id} />
      <h4 className="text-info" id={user.id}>{user.name}</h4>
    </div>
  );
}


export default Inbox;
