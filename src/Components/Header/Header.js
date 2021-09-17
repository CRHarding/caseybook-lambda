import React from 'react';
import './Header.css';

import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <nav>
                <Link to="/">Home</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/users">Users</Link>
            </nav>
        </div>
    )
}

export default Header;