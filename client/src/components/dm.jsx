import React from 'react';



function DM(props) {

    const { user, mainViewUser, changeView} = props;
    const { username } = user;

    function handleClick(){
      changeView('browse', null);
   }

    return (
        <div> 
           <span className="badge badge-warning" onClick={handleClick}>back to browse</span>
          <div>Hey {user.username}, slide into {mainViewUser.username}'s DM</div>
        </div>
    );
}

export default DM;