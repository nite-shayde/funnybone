import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom';
import Axios from 'axios';



function Signup() {

    const [username, setUsername] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [bio, setBio] = useState('');
    const [profilePicURL, setProfilePicURL] = useState('')

    // object containing set functions for all states
    // key for all === state trying to set

    const set = {
        username: setUsername,
        displayName: setDisplayName,
        email: setEmail,
        password: setPassword,
        bio: setBio,
        profilePicURL: setProfilePicURL
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
        <div class="container">
            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <a href="#signup" class="nav-link active" data-toggle="tab">Sign Up</a>
                </li>
                <li class="nav-item">
                    <a href="#login" class="nav-link" data-toggle="tab">Login</a>
                </li>
            </ul>
            <div class="tab-content">
                <div class="tab-pane" id="signup">
                    <form action="/api/user" method="post">
                        <fieldset>
                            <legend class="text-center"><h1>Funny Bone Sign Up</h1></legend>
                            <div className="form-group">
                                <label for="username">Username</label>
                                <input className="form-control" name="username" id="username" onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label for="name">Display Name</label>
                                <input type="text" className="form-control" name="name" id="name" onChange={handleChange} placeholder="Enter your Display Name" />
                            </div>
                            <div className="form-group">
                                <label for="email">Email address</label>
                                <input type="email" className="form-control" name="email" id="email" onChange={handleChange} aria-describedby="emailHelp" placeholder="Enter email" />
                            </div>
                            <div className="form-group">
                                <label for="password">Password</label>
                                <input className="form-control" name="password" id="password" onChange={handleChange} placeholder="Password" />
                                <small id="password" className="form-text text-muted">I hope your password works for the email ;)</small>
                            </div>
                            {/* <div class="form-group">
                                <label for="profileBio">Bio</label>
                                <input class="form-control" name="bio" id="bio" onChange={handleChange} rows="3" placeholder="Talk about your interest!" />
                            </div> */}
                            <div class="form-group">
                                <label for="profilePicUpload">Upload A Profile Picture</label>
                                <input type="text" className="form-control" name="profilePicURL" id="profilePicURL" onChange={handleChange} placeholder="Paste the url of Profile Pic" />
                                {!profilePicURL || <img src={profilePicURL} className="img-sm" />}
                                {/* <input type="file" class="form-control-file" name="profilePic" id="profilePic" onChange={handleChange} aria-describedby="fileHelp" /> */}
                            </div>
                            <button type="submit" className="btn btn-primary" >Sign Up</button>
                        </fieldset>
                    </form>
                </div>
                <div class="tab-pane" id="login">
                    <h4 class="mt-2">Login</h4>
                    <form action="/login" method="post">
                        <fieldset>
                            <legend class="text-center"><h1>Login to Funny Bone</h1></legend>
                            <div className="form-group">
                                <label for="username">Username</label>
                                <input className="form-control" name="username" id="username" onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" name="password" id="password" onChange={handleChange} placeholder="Password" />
                                <small id="passwordHelp" className="form-text text-muted">What Do You Call A Cow In A Earthquake... A Milkshake ;)</small>
                            </div>
                            <button type="submit" name="Login" className="btn btn-primary" >Login</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    )
}

ReactDOM.render(<Signup />, document.getElementById('signup-app'));
