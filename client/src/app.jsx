import React, { useState } from 'react';
import dummyUserData from './dummy-user-data.js';
import Profile from './components/user-profile.jsx'
import MessageComposer from './components/message-composer.jsx';
import SideBar from './components/side-bar.jsx';

function App() {
  const [user, setUser ] = useState(dummyUserData.joe);


  return ( 
  <div className="container">
    <div className="jumbotron"><h1 className="text-warning">FUNNY BONE</h1></div>

    <nav className="navbar navbar-expand-lg navbar-dark bg-warning">dis the nav bar</nav>
   
    <div id="main-contents" className="row">

      <div id="left-side-bar" className="col-md-3">
     
      <Profile user={user}  />
      </div>

      <div id="main-col" className="col-md-6">
        {/* Compose message component */}
        <MessageComposer />
   
        {/*  */}
      </div>

      <div id="left-side-bar" className="col-md-3">
          {/* RIGHT BAR COMPONENT */}
         <SideBar />
      </div>

    </div>

    <footer className="row"> powered by yo mama</footer>
  </div> );
}

export default App;