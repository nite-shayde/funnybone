/* eslint-disable import/extensions */
import React from 'react';
import UserThumbPreview from './user-thumb-preview.jsx';
import Profile from './profile.jsx';
import Inbox from './inbox.jsx';
import MessageComposer from './message-composer.jsx';

//See MainViewHeader and MainViewBody below
export function MainView(props) {
  const {
    view, changeView, mainViewUser,
  } = props;

  function getViewTarget(target) {
    changeView(target, mainViewUser);
  }

  return (
    <div className="card text-white bg-secondary mb-3">

      <MainViewHeader getViewTarget={getViewTarget} view={view} />

      <div className="card-body">
        <MainViewBody parentProps={props} />
      </div>

    </div>
  );
}


export function MainViewHeader(props) {
  const { getViewTarget, view } = props;

  function handleClick(e) {
    getViewTarget(e.target.dataset.target);
  }


  return (
    <div className="card-header d-flex flex-row justify-content-around">
      {/* <button id="text" type="button" className="btn btn-secondary">Text</button> */}
      <button className="btn btn-sm btn-primary" data-target="browse" onClick={handleClick}>browse</button>
      <h4>{view}</h4>
      <button className="btn btn-sm btn-primary" data-target="inbox" onClick={handleClick}>inbox</button>
    </div>
  );
}

// handles Switching between profile, dm, inbox, browsw
export function MainViewBody(props) {
  const { parentProps } = props;
  const {
    view, changeView, user, mainViewUser, allUsers, selectedContent, setSelectedContent,
  } = parentProps;

  if (view === 'profile') {
    return (
      <Profile mainViewUser={mainViewUser} changeView={changeView} />
    );
  }
  if (view === 'dm') {
    return (
      <MessageComposer user={user} mainViewUser={mainViewUser} changeView={changeView} selectedContent={selectedContent} setSelectedContent={setSelectedContent} />
    );
  }
  if (view === 'inbox') {
    return (
      <Inbox user={user} allUsers={allUsers} changeView={changeView} />
    );
  }
  // Browse
  return (

    <div className="d-flex flex-row justify-content-between flex-wrap">
      { allUsers.filter(u => u.username !== user.username)
        .map(u => <UserThumbPreview key={u.username} user={u} changeView={changeView} />) }
    </div>

  );
}



// export default MainView;
