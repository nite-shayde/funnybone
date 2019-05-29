import React from 'react';

// props is the user data
function Profile(props) {
    const { mainViewUser, changeView } = props;

    function handleClick(){
        changeView('browse', null);
    }

    return (
        <div className="">
        <span className="badge badge-warning" onClick={handleClick}>back to browse</span>
            <div className="">
                <img className="img-thumbnail img-lg" src={mainViewUser.profilePicURL} />
                <h2>@{mainViewUser.username}</h2>
                <h3>{mainViewUser.name}</h3>
                <ul className="list-group">{mainViewUser.interests.map(interest => <button key={interest} type="button" className="list-group-item list-group-item-action">{interest}</button>)}</ul>
            </div>
        </div>
    );
}

export default Profile;