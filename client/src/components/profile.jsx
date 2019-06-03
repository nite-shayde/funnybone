import React from 'react';


// props is the user data
function Profile(props) {
  const { mainViewUser, changeView } = props;
  const {
    username, name, profilePicURL, interests, bio,
  } = mainViewUser;

  function handleClick(e) {
    changeView(e.target.dataset.target, mainViewUser);
  }

  function getViewTarget(target) {
    changeView(target, mainViewUser);
  }

  return (
    <div className="">
      <div className="">
        <img className="img-thumbnail img-lg" src={profilePicURL} alt="" />

        <h3>{name}</h3>
        <button data-target="dm" type="button" className="btn btn-success" onClick={handleClick}>
slide into
          {' '}
          {name}
's DM
          {' '}
                </button>
        <div className="mt-2">{bio}</div>
      </div>
    </div>
  );
}

export default Profile;
