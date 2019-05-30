import React from 'react';
import MessageComposer from './message-composer.jsx';



function DM(props) {

    const { user, mainViewUser, changeView} = props;
    // const { username, profilePicURL } = user;

  function handleClick(e) {
      changeView(e.target.dataset.target, mainViewUser)
  }

    return (
      <div className="card text-white bg-secondary mb-3"> 
         <div className="card-header">
            <div className="d-flex flex-row justify-content-between">
              <div>
                <span className="badge badge-warning mb-3" data-target="browse" onClick={handleClick}>back to browse</span>
                <h4>{mainViewUser.username}'s DM</h4>
              </div>
              <img className="img-sm" data-target="profile" onClick={handleClick} src={mainViewUser.profilePicURL}/>
            </div>
         </div>

         <div className="card-body">
            <div>
                <ul>
                  <li>message 1</li>
                  <li>message 2</li>
                  <li>message 3</li>
                </ul>
            </div>
            <MessageComposer />
         </div>
   </div>
    );
}

export default DM;