import React from 'react';

// props is the user data
function UserSidebarInfo(props) {
    // console.log(props.user.interests);
    const { name, username, interests, profilePicURL, bio } = props.user

    return (
        <div className="">
            <div className="">
                <img className="img-thumbnail img-md" src={profilePicURL} />
                <h3>{name}</h3>
                <div className="mt-2">{bio}</div>
                {/* <ul className="list-group">{interests.map(interest => <button key={interest} type="button" className="list-group-item list-group-item-action">{interest}</button>)}</ul> */}
            </div>
        </div>
    );
}

export default UserSidebarInfo;