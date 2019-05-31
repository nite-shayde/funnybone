import React from 'react';

// props is the user data
function UserSidebarInfo(props) {
    // console.log(props.user.interests);
    const { name, username, interests, profilePicURL } = props.user

    return (
        <div className="container">
            <div className="">
                <img className="img-thumbnail img-md" src={profilePicURL} />
                <h2>@{username}</h2>
                <h3>{name}</h3>
                {/* <ul className="list-group">{interests.map(interest => <button key={interest} type="button" className="list-group-item list-group-item-action">{interest}</button>)}</ul> */}
            </div>
        </div>
    );
}

export default UserSidebarInfo;