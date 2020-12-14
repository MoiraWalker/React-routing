import React from 'react';
import './index.css';

export const Input = ({name, type, id }) => {
    return (
        <input
        name={name}
        type={type}
        id={id}
        />
    );
};