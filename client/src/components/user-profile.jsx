import React from 'react';

// props is the user data
function Proflie(props) {
    // console.log(props.user.interests);
    return (
        <div className="container">
            <div className="">
                <img className="img-thumbnail" src={props.user.profilePicURL} />
                <h2>@{props.user.username}</h2>
                <h3>{props.user.name}</h3>
                <ul className="list-group">{props.user.interests.map(interest => <button type="button" className="list-group-item list-group-item-action">{interest}</button>)}</ul>
            </div>
        </div>
    );
}

export default Proflie;