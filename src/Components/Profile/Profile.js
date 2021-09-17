import React from 'react';

function Profile(props) {
    // const { user } = props; allows us to use user.blah.blah instead of props.user.blah
    return (
        <div className="Profile">
            <h4>{props.user.name.first} {props.user.name.last}</h4>
            <h4>{props.user.login.username}</h4>
            <img src={props.user.picture.medium} alt="thor, the thunder god" />
        </div>
    )
}

export default Profile;
