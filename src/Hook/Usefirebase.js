
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import intialAuthetication from "../Firebase/Firebase.init";

intialAuthetication();

const Usefirebase = () => {

    
   
    const [user, Setuser] = useState({})
    const [error, Seterror] = useState ('')
    const [email, Setemail]= useState('')
    const [password, Setpassword] = useState ('')
    const [name, Setname] = useState('')
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    

    const SignInUsingGoogle = () => {

      return signInWithPopup(auth, googleProvider)
       
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
    }, [auth])

  const handleNameChange = (e) => {
    Setname (e.target.value)

  }

  const handleEmailChange = (e) => {
         Setemail (e.target.value)
  }
  const handlePasswordChange = (e) => {
         Setpassword (e.target.value)
  }

  const setUserName = () => {
    updateProfile(auth.currentUser, {
      displayName: name
    }).then(() => {
     
    })

  }

    const RegisterUsingEmailPassword = (e) => {
      e.preventDefault()
      if (password.length <6 ) {
        Seterror ('Password Must be 6 character long')
        return
      }

      createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        Setuser (result.user);
        Seterror('')
        setUserName()

      })
      .catch((error) => {
        Seterror(error.message)
      });

    }

    const loginUsingEmailPassword = (e) => {
      e.preventDefault()
      signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
       Setuser (result.user);

      })
     
    
    }

    return {
        user, SignInUsingGoogle, error, googleSignOut, RegisterUsingEmailPassword, handleEmailChange, handlePasswordChange, loginUsingEmailPassword, handleNameChange, email, password
    }
 
    




}

export default Usefirebase