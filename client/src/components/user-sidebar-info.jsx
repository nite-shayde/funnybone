import React, { useState, useEffect } from 'react';
import axios from 'axios';

// props is the user data
function UserSidebarInfo(props) {

    const { name, profilePicURL, bio } = props.user
    const [ jokeOfTheDay, setJokeOfTheDay ] = useState('');

    useEffect(() => {
        axios({ url:'https://icanhazdadjoke.com', headers: { Accept: 'application/json'}})
        .then( response => {
            setJokeOfTheDay(response.data.joke)
        })
    }, []);

    return (
        <div className="">
            <div className="">
                <img id="user-profile-pic" className="img-thumbnail img-md" src={profilePicURL} />
                <h3>{name}</h3>
                <div className="my-2">{bio}</div>
                <div className="text-success">
                    <h4 className="">joke of the day</h4>
                    <div>
                        {jokeOfTheDay}
                    </div>
                </div>
                {/* <ul className="list-group">{interests.map(interest => <button key={interest} type="button" className="list-group-item list-group-item-action">{interest}</button>)}</ul> */}
            </div>
        </div>
    );
}

export default UserSidebarInfo;