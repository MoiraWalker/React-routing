import React from 'react';
import { LoginForm }from '../../components/organisms/loginForm';
import './index.css';

export const Login = () => (
    <div className='page-container'>
        <div className='login-form-container'>
            <LoginForm/>
        </div>
    </div>
);