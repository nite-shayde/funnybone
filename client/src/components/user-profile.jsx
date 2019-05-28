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
            <img src={props.user.profilePicURL} />
            <h1>@{props.user.username}</h1>
            <h2>{props.user.name}</h2>
            <ul>{props.user.interests.map(interest => <li>{interest}</li>)}</ul>
        </div>
    );
}

export default Proflie;