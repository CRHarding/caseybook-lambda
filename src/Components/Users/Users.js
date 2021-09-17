import React from 'react';

import Profile from '../Profile/Profile';

function Users(props) {
    return (
        <div className="users">
            {props.users.map(user => {
                return <Profile user={user} key={user.login.uuid} />
            })}
        </div>
    )
}

export default Users;