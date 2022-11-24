import React, { createContext } from 'react';
import { getAuth } from 'firebase/auth'
import app from '../firebase/firebase.config';
const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({ children }) => {


    /* Create user */
    return (
        <AuthContext.Provider >
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;