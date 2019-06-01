import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom';
import Axios from 'axios';

const bodyParser = require('body-parser');
app.use(bodyParser.json);
app.use(bodyParser.urlencoded({ extended: true }));



function Signup() {

    const [username, setUsername] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [bio, setBio] = useState('');
    const [profilePic, setProfilePic] = useState('')

    // object containing set functions for all states
    // key for all === state trying to set

    const set = {
        username: setUsername,
        displayName: setDisplayName,
        email: setEmail,
        password: setPassword,
        bio: setBio,
        profilePic: setProfilePic
    }


    // storeUsername
    function handleChange(e) {
        const { name, value } = e.target
        set[name](value)
        // console.log(e.target.value);
    }

    // function handleClick() {
    //     axios.post('/api/user').then((response) => {
    //         console.log(response);
    //     })
    // }

    return (
        <div>
            <form action="/api/user" method="post">
                <fieldset>
                    <legend class="text-center"><h1>Funny Bone Signup</h1></legend>
                    <div className="form-group">
                        <label for="username">Username</label>
                        <input className="form-control" name="username" id="username" onChange={handleChange} />
                    </div>
                    {/* <div className="form-group">
                        <label for="display">Display Name</label>
                        <input type="text" className="form-control" name="displayName" id="displayName" onChange={handleChange} placeholder="Enter your Display Name" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" name="email" id="email" onChange={handleChange} aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" name="password" id="password" onChange={handleChange} placeholder="Password" />
                        <small id="passwordHelp" className="form-text text-muted">I hope your password works for the email ;)</small>
                    </div>
                    <div class="form-group">
                        <label for="profileBio">Bio</label>
                        <input class="form-control" name="bio" id="bio" onChange={handleChange} rows="3" placeholder="Talk about your interest!" />
                    </div>
                    <div class="form-group">
                        <label for="profilePicUpload">Upload A Profile Picture</label>
                        <input type="file" class="form-control-file" name="profilePic" id="profilePic" onChange={handleChange} aria-describedby="fileHelp" />
                    </div> */}
                    <button type="submit" name="Sign Up" className="btn btn-primary" >Sign Up</button>
                </fieldset>
            </form>
        </div>
    )
}

ReactDOM.render(<Signup />, document.getElementById('signup-app'));
