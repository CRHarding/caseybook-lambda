import React from 'react';

function Profile(props) {
    // const { user } = props; allows us to use user.blah.blah instead of props.user.blah
    return (
        <div className="Profile">
            <h4>{props.user.name.first} {props.user.name.last}</h4>
            <h4>{props.user.login.username}</h4>
            {!props.alphaUser && <button 
                onClick={() => props.addFriend(props.user.login.uuid)}
            >Add Friend</button>}
            <img src={props.user.picture.medium} alt="thor, the thunder god" />
            {props.user.friends && props.user.friends.map(friend => {
                return <p>{friend.username}</p>
            })}
            {props.user.posts && props.user.posts.map(post => {
                return (
                    <div className="post">
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Profile;
