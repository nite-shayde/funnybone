import React, { useState } from 'react';
import ReactDOM from 'react-dom';


function Signup() {
  const [username, setUsername] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [bio, setBio] = useState('');
  const [profilePicURL, setProfilePicURL] = useState('');

  // object containing set functions for all states
  // key for all === state trying to set

  const set = {
    username: setUsername,
    displayName: setDisplayName,
    email: setEmail,
    password: setPassword,
    bio: setBio,
    profilePicURL: setProfilePicURL,
  };


  // storeUsername
  function handleChange(e) {
    const { name, value } = e.target;
    set[name](value);
    // console.log(e.target.value);
  }

  return (
    <div></div>
  );
}

export default humorForm;
