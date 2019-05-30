import React from 'react';
import MessageComposer from './message-composer.jsx';



function DM(props) {

    const { user, mainViewUser, changeView} = props;
    // const { username, profilePicURL } = user;

  function handleClick(e) {
      changeView(e.target.dataset.target, mainViewUser)
  }

    return (
      <div> 
        <span className="badge badge-warning" data-target="browse" onClick={handleClick}>back to browse</span>
        <h3>{mainViewUser.username}'s DM</h3>
        <img className="img-sm" data-target="profile" onClick={handleClick} src={mainViewUser.profilePicURL}/>
        <div>
            <ul>
              <li>message 1</li>
              <li>message 2</li>
              <li>message 3</li>

            </ul>
        </div>
        <MessageComposer />
   </div>
    );
}

export default DM;