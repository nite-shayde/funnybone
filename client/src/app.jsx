import React, { useState } from 'react';
import dummyUserData from './dummy-user-data.js';
// import Profile from './components/profile.jsx'

function App() {
  const [user, setUser ] = useState(dummyUserData.joe);

  // setUser();
  console.log(dummyUserData)

  return ( 
  <div>
    <h1>FUNNY BONE</h1>
    <nav>dis the nav bar</nav>
    <div id="main-contents">
    {/* PROFILE COMPONENT */}
    {/* <Profile user={user} */}
    {/* MAIN COMPONENT */}
    {/* RIGHT BAR COMPONENT */}
    </div>

    <footer>powered by yo mama</footer>
  </div> );
}

export default App;