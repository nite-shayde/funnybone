import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserSidebarInfo from './components/user-sidebar-info.jsx';
import SearchSideBar from './components/search-sidebar.jsx';
import { MainView } from './components/main-view.jsx';
import Header from './components/header.jsx';


function App() {
  const [allUsers, setAllUsers] = useState([]);
  const [user, setUser] = useState({ interests: [] });
  const [view, setView] = useState('browse');
  const [mainViewUser, setMainViewUser] = useState(null);
  const [selectedContent, setSelectedContent] = useState({});

  useEffect(() => {
    axios.get('/api/user').then((response) => {
      const { user: resUser, allUsers: resAllUsers } = response.data;
      if (resAllUsers.length) {
        setAllUsers(resAllUsers);
        setUser(resUser);
      }
    });
  }, [allUsers.length]);

  function changeSelectedContent(src, vidId) {
    setSelectedContent({ src, vidId });
  }

  function changeView(newView, newMainViewUser) {
    setView(newView);
    setMainViewUser(newMainViewUser);
  }

  return (
    <div className="container">
      {/* <div className="d-flex justify-content-end"><h1 className="text-warning">FUNNY BONE</h1></div>

      <nav className="navbar navbar-expand-lg navbar-dark bg-warning mb-4">
        <a href="/logout"><span className="badge badge-secondary">logout</span></a>
      </nav> */}

      <Header />

      <div id="main-contents" className="row">

        <div id="left-side-bar" className="col-md-2">
          <UserSidebarInfo user={user} />
        </div>

        <div id="main-view" className="col-md-6">
          <MainView view={view} changeView={changeView} user={user} mainViewUser={mainViewUser} allUsers={allUsers} selectedContent={selectedContent} setSelectedContent={setSelectedContent} />
        </div>

        <div id="right-side-bar" className="col-md-4">
          <SearchSideBar changeSelectedContent={changeSelectedContent} />
        </div>

      </div>

      <footer className="container">
        <i>powered by</i>
&nbsp; Yo Mama &trade;
      </footer>

    </div>
  );
}


export default App;
