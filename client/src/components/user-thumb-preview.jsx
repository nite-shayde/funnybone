import React from 'react';



function UserThumbPreview(props) {

    // const [browseUsers, setBrowseUsers] = useState(dummyUserData);
    const { username } = props.user;

    return (
        <div> 
            <div className="d-flex flex-row">
                <div>{  username }</div>
                <button type="button" class="btn btn-sm btn-danger">DM</button>
            </div>
        </div>
    );
}

export default UserThumbPreview;