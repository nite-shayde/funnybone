import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header.jsx';

{/* <div className="form-group">
  <label htmlFor="profilePicUpload">Upload A Profile Picture</label>
  <input type="text" className="form-control" name="profilePicURL" id="profilePicURL" onChange={handleChange} placeholder="Paste the url of Profile Pic" />
  {!profilePicURL || <img src={profilePicURL} className="img-sm" />}
  {/* <input type="file" class="form-control-file" name="profilePic" id="profilePic" onChange={handleChange} aria-describedby="fileHelp" /> */}
// </div> */}

function Signup() {
  const [username, setUsername] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [bio, setBio] = useState('');
  const [profilePicURL, setProfilePicURL] = useState('');
  const [humor, setHumor] = useState('');
  
  // object containing set functions for all states
  // key for all === state trying to set

  const set = {
    username: setUsername,
    displayName: setDisplayName,
    email: setEmail,
    password: setPassword,
    bio: setBio,
    profilePicURL: setProfilePicURL,
    humor: setHumor,
  };


  // storeUsername
  function handleChange(e) {
    const { name, value } = e.target;
    set[name](value);
    // console.log(e.target.value);
  }

  return (
    <div className="container">
      <Header />


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
              <legend className="text-center"><h2>Funny Bone Sign Up</h2></legend>
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
                <label>
                  Select your favorite type of humor:
                  <select onChange={handleChange} name="humor" id="humor" >
                    <option value="observational">Observational</option>
                    <option value="slapstick">Slapstick</option>
                    <option value="sarcastic">Sarcastic</option>
                    <option value="dry">Dry</option>
                    <option value="dark">Dark</option>
                    <option value="juvenile">Juvenile</option>
                    <option value="cringey">Cringey</option>
                    <option value="surreal">Surreal</option>
                    <option value="wordplay">Wit-Wordplay (Puns)</option>
                    <option value="satirical">Satirical</option>
                  </select>
                </label>
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
          <form action="/login" method="post">
            <fieldset>
              <legend className="text-center"><h2>Login to Funny Bone</h2></legend>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input className="form-control" name="username" id="username" onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" name="password" id="password" onChange={handleChange} placeholder="Password" />
                <small id="passwordHelp" className="form-text text-muted">What Do You Call A Cow In An Earthquake... A Milkshake ;)</small>
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
