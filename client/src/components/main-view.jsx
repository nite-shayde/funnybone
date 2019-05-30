import React, { useState } from 'react';
import UserThumbPreview from './user-thumb-preview.jsx';
import DM from './dm.jsx';
import dummyUserData from '../dummy-user-data';
import Profile from './profile.jsx';


export function MainView(props) {

  const { view, changeView, user, mainViewUser, allUsers } = props;

  function getViewTarget(target) {
    changeView(target, mainViewUser)
  }


  return (
    <div className="card text-white bg-secondary mb-3">
    
        
        <MainViewHeader getViewTarget={getViewTarget} view={view}/>
       
        <div className="card-body">
          <MainViewBody parentProps={props}/>
        </div>   
    
    </div>
  )



}

export function MainViewBody(props) {

    
    const { view, changeView, user, mainViewUser, allUsers } = props.parentProps;

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
    if (view === 'inbox') {
      return (
        <div>dis here ur inbox</div>
      )
    }
    // or just show the browse user view
    return (
        
          <div className="d-flex flex-row justify-content-between">
            { allUsers.filter(u => u.id !== user.id)
              .map( u => <UserThumbPreview key={u.id} user={u} changeView={changeView}/> ) }
          </div>
       
    );
}


export function MainViewHeader(props) {

  const { getViewTarget, view} = props;

  function handleClick(e) {
      getViewTarget(e.target.dataset.target)
  }


  return ( 
      <div className="card-header d-flex flex-row justify-content-around">
          {/* <button id="text" type="button" className="btn btn-secondary">Text</button> */}
           <button className="btn btn-primary" data-target="browse" onClick={handleClick}>browse</button>
           <h3>{view}</h3>
          <button className="btn btn-primary" data-target="inbox" onClick={handleClick}>inbox</button>
      </div>   
  )

}

// export default MainView;