import React, { useState } from 'react';
import dummyUserData from './dummy-user-data.js';
import Profile from './components/user-profile.jsx'

function App() {
  const [user, setUser ] = useState(dummyUserData.joe);


  return ( 
  <div className="container">
    <h1 className="row">FUNNY BONE</h1>
    <div className="row"><nav>dis the nav bar</nav></div>
    <div id="main-contents" className="row">

      <div id="left-side-bar" className="col-md-3 card text-white bg-info mb-3">
     
      <Profile user={user}  />
      </div>

      <div id="main-col" className="col-md-6 card text-white bg-info mb-3">
        {/* Compose message component */}
   
        {/*  */}
      </div>

      <div id="left-side-bar" className="col-md-3 card text-white bg-info mb-3">
          {/* RIGHT BAR COMPONENT */}
         
      </div>

    </div>

    <footer className="row"> powered by yo mama</footer>
  </div> );
}

export default App;