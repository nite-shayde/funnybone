import React from 'react';
import MessageComposer from './message-composer.jsx';
import { MainViewHeader } from './main-view.jsx';



function DM(props) {

    const { user, mainViewUser, changeView} = props;
    // const { username, profilePicURL } = user;

  function handleClick(e) {
      changeView(e.target.dataset.target, mainViewUser)
  }

  function getViewTarget(target) {
    changeView(target, mainViewUser)
  }


    return (
      
    
          //  {/* <MainViewHeader getViewTarget={getViewTarget}/> */}
         

         <div className="">
            <div className="d-flex flex-row justify-content-between">
              <div>
                <h4>{mainViewUser.username}'s DM</h4>
              </div>
              <img className="img-xs" data-target="profile" onClick={handleClick} src={mainViewUser.profilePicURL}/>
            </div>
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