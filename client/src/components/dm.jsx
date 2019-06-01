import React from 'react';
import MessageComposer from './message-composer.jsx';
import { MainViewHeader } from './main-view.jsx';



function DM(props) {

  const { user, mainViewUser, changeView, selectedContent} = props;

  function handleClick(e) {
      changeView(e.target.dataset.target, mainViewUser)
  }

  function getViewTarget(target) {
    changeView(target, mainViewUser)
  }

  return (
        <div className="">
          <div className="d-flex flex-row justify-content-between">
            <div>
              <h4>{mainViewUser.username}'s DM</h4>
            </div>
            <img className="img-xs" data-target="profile" onClick={handleClick} src={mainViewUser.profilePicURL}/>
          </div>
          
          <MessageComposer user={user} mainViewUser={mainViewUser} selectedContent={selectedContent} />
        </div>
  
  );
}

export default DM;