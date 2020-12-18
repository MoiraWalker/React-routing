import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';
import { AuthContext } from "../../../context/authContext";
import { useContext } from 'react';

function TopMenu() {
    const context = useContext(AuthContext);
    const { toggle, setToggle } = context;

    return (
        <nav>
            <div className="nav-container">
                <NavLink to="/" exact className="blogspot">Blogspot</NavLink>
                <ul className="nav-list">
                    <li>
                        <NavLink to="/" exact activeClassName="active-link" className="link">Blog</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" activeClassName="active-link" className="link" >About</NavLink>
                    </li>
                    { toggle ?
                        <li>
                            <NavLink to="/login" className="primary-link" >Log in</NavLink>
                        </li>
                        :
                        <li>
                            <NavLink to="/logout"  className="secundary-link" >Log out</NavLink>
                        </li>
                    }
                </ul>
            </div>
        </nav>
    );
}

export default TopMenu;