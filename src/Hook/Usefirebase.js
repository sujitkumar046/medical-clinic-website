
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut} from "firebase/auth";
import { useEffect, useState } from "react";
import intialAuthetication from "../Firebase/Firebase.init";

intialAuthetication();

const Usefirebase = () => {

    

    const [user, Setuser] = useState({})
    const [error, Seterror] = useState ('')
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    

    const SignInUsingGoogle = () => {

        signInWithPopup(auth, googleProvider)
        .then((result) => {
        Setuser(result.user);
        })
        .catch((error) => {
            Seterror(error.message);
          });

       
    }

   

    const googleSignOut = () => {
        signOut(auth)
        .then(() => {
            Setuser({})
          })
          .catch((error) => {
            Seterror(error)
          });
    }

    useEffect (() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              
              Setuser(user)
            } 
            else {
              
            }
          });
    }, [])

    return {
        user, SignInUsingGoogle, error, googleSignOut
    }
 
    




}

export default Usefirebase