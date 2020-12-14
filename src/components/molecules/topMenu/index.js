import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';


function TopMenu() {
    return (
        <nav>
            <div className="nav-container">
                <NavLink to="/" exact className="blogspot">Blogspot</NavLink>
                <ul className="nav-list">

                    <li>
                        <NavLink to="/" exact activeClassName="active-link" className="link">Home</NavLink>
                    </li>

                    <li>
                        <NavLink to="/blog" activeClassName="active-link" className="link" >Blog</NavLink>
                    </li>

                    <li>
                        <NavLink to="/login"  className="login" >Log in</NavLink>
                    </li>
                </ul>

            </div>
        </nav>
    );
}

export default TopMenu;