/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-param-reassign */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

// Convo component below
function Inbox(props) {
  const {
    user, allUsers, changeView,
  } = props;

  const [convoIds, setConvoIds] = useState([]);

  const usersById = allUsers.filter(u => convoIds.includes(u.id))
    .reduce((userNames, u) => {
      userNames[u.id] = u;
      return userNames;
    }, {});

  function handleClick(e) {
    const { id } = e.target;
    changeView('dm', usersById[id]);
  }

  useEffect(() => {
    axios.get(`api/message/${user.id}`).then((response) => {
      setConvoIds(response.data);
    }).catch(() => {});
  }, [convoIds.length]);

  return (
    <div className="">

      {allUsers.filter(u => convoIds.includes(u.id))
        .map(u => <Convo handleClick={handleClick} user={u} key={u.username} />)}

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

Inbox.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    username: PropTypes.string,
    bio: PropTypes.string,
    id: PropTypes.number,
    profilePicURL: PropTypes.string,
  }).isRequired,
  allUsers: PropTypes.shape([]).isRequired,
  changeView: PropTypes.func.isRequired,
};


Convo.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    username: PropTypes.string,
    bio: PropTypes.string,
    id: PropTypes.number,
    profilePicURL: PropTypes.string,
  }).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Inbox;
