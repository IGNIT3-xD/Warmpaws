import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from './../firebase.init';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const provider = new GoogleAuthProvider;
    const [email, setEmail] = useState('')
    const [book, setBook] = useState([])

    const createUser = (email, pass) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, pass)
    }

    const loginUser = (email, pass) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, pass)
    }

    const logoutUser = () => {
        setLoading(true)
        return signOut(auth);
    }

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const updateUser = (data) => {
        setLoading(true)
        return updateProfile(auth.currentUser, data)
    }

    const forgetPass = (forgetPassEmail) => {
        return sendPasswordResetEmail(auth, forgetPassEmail)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })

        return () => unsubscribe()
    }, [])

    const authInfo = {
        createUser,
        loginUser,
        googleSignIn,
        logoutUser,
        setUser,
        updateUser,
        forgetPass,
        user,
        loading,
        email,
        setEmail,
        book,
        setBook,
    }

    // console.log(user);

    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;