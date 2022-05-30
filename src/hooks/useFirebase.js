import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    
    const handleGoogleSignIn = () => {
        
     return signInWithPopup(auth, googleProvider)
        
    }


    const handleSignOut = () => {
        signOut(auth)
        .then(()=> {
            console.log("sign out successful");
            setUser({})
        })
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
            setUser(user)
            }
          });
          
    }, [])


    return {
        handleGoogleSignIn, 
        user,
        handleSignOut
    }
}


export default useFirebase;