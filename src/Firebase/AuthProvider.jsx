import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth/cordova";
import auth from "./Firebase.config";
export const AuthContext =createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)


    const createUser =(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const LoginUser =(email,password) =>{
        return signInWithEmailAndPassword(email,password)
    }

    const logOut =() =>{
        return signOut(auth)
    }

    useEffect(() =>{
        const unSubscribe= onAuthStateChanged( auth,(currentUser)=>{
            setUser(currentUser);
            console.log('Observing current user inside useEffect if authProvider',currentUser);
        });
        return() =>{
            unSubscribe();
        }
    },[])
    const authInfo ={user,
        createUser,
        LoginUser,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes={
    children:PropTypes.node,
}