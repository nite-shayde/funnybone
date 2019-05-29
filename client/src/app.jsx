import React, { useState } from 'react';
import dummyUserData from './dummy-user-data.js';
import UserSidebarInfo from './components/user-sidebar-info.jsx'
import MessageComposer from './components/message-composer.jsx';
import SideBar from './components/side-bar.jsx';
import MainView from './components/main-view.jsx';

function App() {
  const [allUsers, setAllUsers] = useState(dummyUserData)
  const [user, setUser ] = useState(allUsers[1]);
  const [view, setView ] = useState("browse");
  const [mainViewUser, setMainViewUser] = useState(null);


  function changeView(view, user) {
    setView(view);
    setMainViewUser(user)
  }


  return ( 
  <div className="container">
    <div className="d-flex justify-content-end"><h1 className="text-warning">FUNNY BONE</h1></div>

    <nav className="navbar navbar-expand-lg navbar-dark bg-warning">dis the nav bar</nav>
   
    <div id="main-contents" className="row">

      <div id="left-side-bar" className="col-md-3">
     
      <UserSidebarInfo user={user}  />
      </div>

      <div id="main-col" className="col-md-6">
        {/* Compose message component */}
        <MessageComposer />
        <MainView view={view} changeView={changeView} user={user} mainViewUser={mainViewUser} allUsers={allUsers}/>
        {/*  */}
      </div>

      <div id="left-side-bar" className="col-md-3">
          {/* RIGHT BAR COMPONENT */}
         <SideBar />
      </div>

    </div>

    <footer className="container"> <i>powered by</i>&nbsp; Yo Mama &trade;</footer>
  </div> );
}

export default App;