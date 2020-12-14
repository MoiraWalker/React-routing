import React from 'react';
import './index.css';

export const Label = ({children, name}) => {
    return(
        <label
            htmlFor={name}>
            {children}
        </label>
    );
};