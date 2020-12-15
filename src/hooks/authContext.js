import React, { useState } from 'react';

export const AuthContext = React.createContext({});

const AuthProvider = ({ children}) => {
    const [toggle, setToggle ]= useState(false);
    return (
        <AuthContext.Provider value={{toggle, setToggle}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

