import React from 'react';
import MessageComposer from './message-composer.jsx';


function DM(props) {

  const { user, mainViewUser, changeView, selectedContent, setSelectedContent } = props;

  function handleClick(e) {
      changeView(e.target.dataset.target, mainViewUser)
  }

  function getViewTarget(target) {
    changeView(target, mainViewUser)
  }

  return (
        <div className="">
          <div className="d-flex flex-row justify-content-around align-items-end mb-2">
            <div>
              <h4 data-target="profile" onClick={handleClick}> {mainViewUser.username}</h4>
            </div>
            <img className="img-xs rounded" data-target="profile" onClick={handleClick} src={mainViewUser.profilePicURL}/>
          </div>
          
          <MessageComposer user={user} mainViewUser={mainViewUser} selectedContent={selectedContent} setSelectedContent={setSelectedContent} />
        </div>
  
  );
}

export default DM;