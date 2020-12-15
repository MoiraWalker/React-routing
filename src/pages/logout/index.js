import React from 'react';
import './index.css';
import {LogoutForm} from "../../components/organisms/logoutForm";



export const Logout = () => (
    <div className='page-container'>
        <div className='login-form-container'>
            <LogoutForm/>
        </div>
    </div>
);