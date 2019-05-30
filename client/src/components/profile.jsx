import React from 'react';
import { MainViewHeader } from './main-view.jsx';

// props is the user data
function Profile(props) {
    const { mainViewUser, changeView } = props;
    const { username, name, profilePicURL, interests } = mainViewUser;

    function handleClick(e) {
        changeView(e.target.dataset.target, mainViewUser)
    }

    function getViewTarget(target) {
        changeView(target, mainViewUser)
    }

    return (
       
           
        //    <MainViewHeader getViewTarget={getViewTarget}/>
           
            <div className="">
                <div className="">
                    <img className="img-thumbnail img-lg" src={profilePicURL} />
                    <h4>@{username}</h4>
                    <h3>{name}</h3>
                    <button data-target="dm" type="button" className="btn btn-sm btn-success" onClick={handleClick}>slide into {username}'s DM </button>
                    <ul className="list-group">{interests.map(interest => <button key={interest} type="button" className="list-group-item list-group-item-action">{interest}</button>)}</ul>
                </div>
            </div>
       
    );
}

export default Profile;

