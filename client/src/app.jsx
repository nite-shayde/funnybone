import React, { useState, useEffect } from 'react';
import dummyUserData from './dummy-user-data';
import UserSidebarInfo from './components/user-sidebar-info.jsx'
import SearchSideBar from './components/search-sidebar.jsx';
import { MainView } from './components/main-view.jsx';
import axios from 'axios';


function App() {
  // TAKE THIS LINE OUT
  const dummyData = dummyUserData.map(u => { u.interests = []; return u; })

  const [allUsers, setAllUsers] = useState([])
  const [user, setUser] = useState({ interests: [] });
  const [view, setView] = useState("browse");
  const [mainViewUser, setMainViewUser] = useState(null);
  const [selectedContent, setSelectedContent] = useState({});

  useEffect(() => {
    axios.get('/api/user').then((response) => {
      const { user, allUsers } = response.data;
      if (allUsers.length) {

        console.log(user, allUsers)
        setAllUsers(allUsers)
        setUser(user);
      }
    })
  }, [allUsers.length])

  function changeSelectedContent(src, vidId) {
    setSelectedContent({ src, vidId })
  }

  function changeView(view, mainViewUser) {
    setView(view);
    setMainViewUser(mainViewUser)
  }

  // JUST FOR TESTING
  function setUserByUsername(username) {
    allUsers.forEach(u => {
      if (u.username == username) setUser(u);
    })
    setView('browse');
  }

  // function logout(){
  //   axios.get('/logout')
  // }

  return (
    <div className="container">
      <div className="d-flex justify-content-end"><h1 className="text-warning">FUNNY BONE</h1></div>

      <nav className="navbar navbar-expand-lg navbar-dark bg-warning mb-4">
        <a href="/logout"><button className="btn btn-secondary" >logout</button></a>
      </nav>

      <div id="main-contents" className="row">

        <div id="left-side-bar" className="col-md-3">
          <UserSidebarInfo user={user} />
        </div>

        <div id="main-view" className="col-md-6">  
          <MainView view={view} changeView={changeView} user={user} mainViewUser={mainViewUser} allUsers={allUsers} selectedContent={selectedContent}/>
        </div>

        <div id="right-side-bar" className="col-md-3">
          <SearchSideBar changeSelectedContent={changeSelectedContent}/>
        </div>

      </div>

      <div>
        <select onChange={(e) => { setUserByUsername(e.target.value) }}>
          {allUsers.map(u => <option key={u.id} value={u.username}>{u.name}</option>)}
        </select>
      </div>


      <footer className="container"> <i>powered by</i>&nbsp; Yo Mama &trade;</footer>


    </div>);
}




export default App;