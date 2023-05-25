import React, { useState } from 'react';
import { createContext } from "react";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import app from "../firebase/firebase.config";

export const UserContext = createContext()

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState({name: 'Adnan Hossain'});

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        return signOut(auth);
    }

    const authInfo = {user, createUser, signIn, logOut};
    return (
            <UserContext.Provider value={authInfo}>
                {children}
            </UserContext.Provider>
        
    );
};

export default AuthProvider;