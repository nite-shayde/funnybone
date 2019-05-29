import React from 'react';



function DM(props) {

    const { user, mainViewUser} = props;
    const { username } = user;

    // function handleClick(e) {
    //     changeView(e.target.dataset.target, user)
    // }

    return (
        <div> 
          Hey {user.username}, slide into {mainViewUser.username}'s DM
        </div>
    );
}

export default DM;