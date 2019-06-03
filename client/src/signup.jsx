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
    <div className="container">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a href="#login" className="nav-link active" data-toggle="tab">Login</a>
        </li>
        <li className="nav-item">
          <a href="#signup" className="nav-link" data-toggle="tab">Sign Up</a>
        </li>
      </ul>
      <div className="tab-content">
        <div className="tab-pane" id="signup">
          <form action="/api/user" method="post">
            <fieldset>
              <legend className="text-center"><h1>Funny Bone Sign Up</h1></legend>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input className="form-control" name="username" id="username" onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="name">Display Name</label>
                <input type="text" className="form-control" name="name" id="name" onChange={handleChange} placeholder="Enter your Display Name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input type="email" className="form-control" name="email" id="email" onChange={handleChange} aria-describedby="emailHelp" placeholder="Enter email" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input className="form-control" type="password" name="password" id="password" onChange={handleChange} placeholder="Password" />
                <small id="password" className="form-text text-muted">I hope your password works for the email ;)</small>
              </div>
              <div className="form-group">
                <label htmlFor="profileBio">Bio</label>
                <textarea maxLength="499" className="form-control" name="bio" id="bio" onChange={handleChange} rows="3" placeholder="Talk about your interest!" />
              </div>
              <div className="form-group">
                <label htmlFor="profilePicUpload">Upload A Profile Picture</label>
                <input type="text" className="form-control" name="profilePicURL" id="profilePicURL" onChange={handleChange} placeholder="Paste the url of Profile Pic" />
                {!profilePicURL || <img src={profilePicURL} className="img-sm" />}
                {/* <input type="file" class="form-control-file" name="profilePic" id="profilePic" onChange={handleChange} aria-describedby="fileHelp" /> */}
              </div>
              <button type="submit" className="btn btn-primary">Sign Up</button>
            </fieldset>
          </form>
        </div>
        <div className="tab-pane active" id="login">
          <h4 className="mt-2">Login</h4>
          <form action="/login" method="post">
            <fieldset>
              <legend className="text-center"><h1>Login to Funny Bone</h1></legend>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input className="form-control" name="username" id="username" onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" name="password" id="password" onChange={handleChange} placeholder="Password" />
                <small id="passwordHelp" className="form-text text-muted">What Do You Call A Cow In A Earthquake... A Milkshake ;)</small>
              </div>
              <button type="submit" name="Login" className="btn btn-primary">Login</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<Signup />, document.getElementById('signup-app'));
