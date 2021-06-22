
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import React, { useState, createContext, useContext } from 'react';
import { useEffect } from "react";
import { UserContext } from "./App";




if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const value = Auth()
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>)
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  return context
}

export const Auth = () => {

  const [user, setUser] = useState({});
  const [error, setError] = useState(null);
  const [authToken, setAuthToken] = useState(null);

  const storeAuthToken = () => {
    firebase.auth().currentUser.getIdToken(true)
      .then(function (idToken) {
        // console.log("token", idToken);
        setAuthToken(idToken)
      }).catch(function (error) {
        console.log('Token Collection fail.')
      });
  }

  React.useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        storeAuthToken();
        setUser({ name: user.displayName, email: user.email, photo: user.photoURL })
      } else {
        setUser(null)
      }
    });
  }, [])


  // Check User on Database and Insert New User
  const [verifyEmail, setVerifyEmail] = useState(false);
  const [verifyStatus, setVerifyStatus] = useState([]);

  useEffect(() => {
    if (verifyEmail === false) {
      // console.log('No Error Dise')
    } else {
      fetch(`https://pacific-citadel-04482.herokuapp.com/verify-email-address?email=` + user?.email, {
        headers: {
          "authorization": authToken
        }
      })
        .then(res => res.json())
        .then(data => {
          if (data) {
            setVerifyStatus(data[0])
          } else {
            // console.log("Nothing")
          }
        })
    }
  }, [verifyEmail]);

  // Insert New User
  useEffect(() => {
    if (verifyStatus?.email === user?.email && verifyEmail === true) {
      // console.log(verifyStatus?.email, user.email, 'Kori Nai Vai')
    } else if (verifyStatus?.email !== user.email && verifyEmail == true) {
      const newUserDetails = { ...user, permission: 'customer' };
      const url = `https://pacific-citadel-04482.herokuapp.com/addNewUser`;
      fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUserDetails)
      })
        .then(res => res.json())
        .then(data => {
          if (true) {
            // console.log(data)
          } else {
            console.log('Fail');
          }
        })
    }
    else {
      // console.log(verifyStatus?.email, user.email, 'Kicu Kori Nai Vai')
    }
  }, [verifyStatus]);
  const signOut = () => {
    firebase.auth().signOut().then(() => {
    })
    .catch((error) => {
      console.log("Failed To SignOut");
    });

  }

  return {
    user,
    authToken,
    signOut,
    error,
  }
}