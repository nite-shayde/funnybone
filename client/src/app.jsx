/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserSidebarInfo from './components/user-sidebar-info.jsx';
import SearchSideBar from './components/search-sidebar.jsx';
import { MainView } from './components/main-view.jsx';
import Header from './components/header.jsx';

/**
 * Main App (3 components)
 * Left side bar: UserSideBarInfo
 * Center: MainView
 * Right: SearchSideBar
 * 
 */

function App() {

  /**
   * useState hooks into state it returns and array with 2 items
   * the first is the variable in the state and the second is the function
   * to change like setState
   */
  const [allUsers, setAllUsers] = useState([]);
  const [user, setUser] = useState({ interests: [] });
  const [view, setView] = useState('browse');
  const [mainViewUser, setMainViewUser] = useState(null);
  const [selectedContent, setSelectedContent] = useState({});

  /**
   * useEffect hooks in componentDidMount and DidUpdate
   * the second argument is what's used to check and what's changed
   * to prevent an infinite loop.
   */
  useEffect(() => {
    axios.get('/api/user').then((response) => {
      const { user: resUser, allUsers: resAllUsers } = response.data;
      if (resAllUsers.length) {
        setAllUsers(resAllUsers);
        setUser(resUser);
      }
    });
  }, [allUsers.length]);

  // Selected Content is the GIF or Vid the user chose from the search bar
  function changeSelectedContent(src, vidId) {
    setSelectedContent({ src, vidId });
  }

  // used to change the main view in the center
  function changeView(newView, newMainViewUser) {
    setView(newView);
    setMainViewUser(newMainViewUser);
  }

  return (
    <div className="container">

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
