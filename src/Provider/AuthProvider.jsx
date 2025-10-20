import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext()

const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)

    const [loading,setLoading] = useState(true);

    const createUser = (email,password) =>{

        setLoading(true)

        return createUserWithEmailAndPassword(auth,email,password)
    }


    const updateUser = (updatedData)=>{

        return updateProfile(auth.currentUser,updatedData)
    }




    const logOut = () =>{

        return signOut(auth);
    }

    const logIn = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth ,(currentUser)=>{
            setUser(currentUser);
            setLoading(false)
        });

        return ()=>{
            unSubscribe()
        }
    },[])

    const authData = {
      user,
      setUser,
      createUser,
      logOut,
      logIn,
      loading,
      setLoading,
      updateUser,
    };
    return (
        <div>
                <AuthContext value={authData}>{children}</AuthContext>
        </div>
    );
};

export default AuthProvider;