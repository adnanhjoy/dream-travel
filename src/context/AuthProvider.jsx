import React, { useState } from 'react';
import { createContext } from "react";
import {getAuth} from 'firebase/auth'
import app from "../firebase/firebase.config";

export const UserContext = createContext()

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState({name: 'Adnan Hossain'});
    const authInfo = {user};
    return (
            <UserContext.Provider value={authInfo}>
                {children}
            </UserContext.Provider>
        
    );
};

export default AuthProvider;