import React from 'react';
import './index.css';

export const Input = ({name, type, id, placeholder, value }) => {
    return (
        <input
            className="input"
            name={name}
            type={type}
            id={id}
            placeholder={placeholder}
            value={value}
        />
    );
};