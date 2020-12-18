import React from 'react';
import './index.css';
import { AuthContext } from "../../../context/authContext";
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';


export const LogoutForm = ({}) => {
    const context = useContext(AuthContext);
    const { toggle, setToggle } = context;

    return(
        <>

             <form >
                 <div className="form-header">
                     <h3 >Log out </h3>
                     <p className="logout-p"> Are you sure you want to log out?</p>
                 </div>
                     <NavLink to="/" onClick={() => setToggle(!toggle)} className="primary-link margin-right" >Log out</NavLink>
                     <NavLink to="/" onClick={() => setToggle(!toggle)} className="tertiary-link" >cancel</NavLink>
             </form>
     </>
    );
}