import React from 'react';



function UserThumbPreview(props) {

    const { user, changeView} = props;
    const { username } = user;

    function handleClick(e) {
        changeView(e.target.dataset.target, user)
    }

    return (
        <div> 
            <div className="d-flex flex-row">
                <div data-target="profile" onClick={handleClick}>{  username }</div>
                <button data-target="dm" type="button" className="btn btn-sm btn-danger" onClick={handleClick}>DM</button>
            </div>
        </div>
    );
}

export default UserThumbPreview;