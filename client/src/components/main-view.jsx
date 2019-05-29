import React, { useState } from 'react';
import UserThumbPreview from './user-thumb-preview.jsx';


const dummyUserData = [
  {
    id: 3,
    username: 'joeyjoe',
    profilePic: ''
  },
  {
    id: 7,
    username: 'samantha',
    profilePic: ''
  },
  {
    id: 9,
    username: 'joeyjoe',
    profilePic: ''
  },
 

];

function MainView(props) {

    const [browseUsers, setBrowseUsers] = useState(dummyUserData);

    return (
        
        <div className="card text-white bg-primary mb-3">
          <div className="card-body">
            {browseUsers.map( user => <UserThumbPreview user={user}/> )}
          </div>
        </div>
    );
}

export default MainView;