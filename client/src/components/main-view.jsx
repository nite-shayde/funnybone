import React, { useState } from 'react';
import UserThumbPreview from './user-thumb-preview.jsx';
import DM from './dm.jsx';
import dummyUserData from '../dummy-user-data';
import Profile from './profile.jsx';

function MainView(props) {

    // const [browseUsers, setBrowseUsers] = useState(dummyUserData);
    const { view, changeView, user, mainViewUser, allUsers } = props;

    if (view === 'profile') {
      return (
        <Profile mainViewUser={mainViewUser} changeView={changeView} />
      )
    }
    if (view === 'dm') {
      return (
       <DM user={user} mainViewUser={mainViewUser} changeView={changeView}/>
      )
    }
    // or just show the browse user view
    return (
        
        <div className="card text-white bg-primary mb-3">
          <div className="card-body">
            {allUsers.filter(u => u.id !== user.id).map( user => <UserThumbPreview key={user.id} user={user} changeView={changeView}/> )}
          </div>
        </div>
    );
}

export default MainView;