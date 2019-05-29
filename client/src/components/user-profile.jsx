import React from 'react';

// const InterestList = props => {
//     <ol>
//         <li>{props.user.interest}</li>
//     </ol>
//     console.log(props.user.interest);
// }

// props is the user data
function Proflie(props) {
    // console.log(props.user.interests);
    return (
        <div>
            <img class="img-thumbnail" src={props.user.profilePicURL} />
            <h2><strong><small>@ </small>{props.user.username}</strong></h2>
            <h3><i>{props.user.name}</i></h3>
            <ul class="list-group">{props.user.interests.map(interest => <button type="button" class="list-group-item list-group-item-action">{interest}</button>)}</ul>
        </div>
    );
}

export default Proflie;