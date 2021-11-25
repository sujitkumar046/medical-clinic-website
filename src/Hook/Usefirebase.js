
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import intialAuthetication from "../Firebase/Firebase.init";

intialAuthetication();

const Usefirebase = () => {

    
   
    const [user, Setuser] = useState({});
    const [error, Seterror] = useState ('');
    const [email, Setemail]= useState('')
    const [password, Setpassword] = useState ('')
    const [name, Setname] = useState('')
    const [isLoading, SetisLoading] = useState(true)
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    

    const SignInUsingGoogle = () => {

      SetisLoading (true)

      return signInWithPopup(auth, googleProvider)

      .finally (() => {SetisLoading(false)})
       
    }

    const handleNameChange = (e) => {
      Setname (e.target.value)
  
    }
  
    const handleEmailChange = (e) => {
           Setemail (e.target.value)
    }
    const handlePasswordChange = (e) => {
           Setpassword (e.target.value)
    }
  

    const loginUsingEmailPassword = (e) => {
      e.preventDefault()
       signInWithEmailAndPassword(auth, email, password)
     .then((result) => {
      Setuser (result.user)
      Seterror('')
      })
     .catch((error) => {
      Seterror('Wrong password or')
     });
 
      
     
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



    useEffect (() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              
              Setuser(user)
            } 
            else {
              Setuser({})
              
            }
            SetisLoading(false)
          });
    }, [auth])


    const googleSignOut = () => {
      SetisLoading(true)
       signOut(auth)
       .then(() => {
           Setuser({})
         })
         .catch((error) => {
           Seterror(error)
         })
          .finally(() => SetisLoading(false))
         
   }

 
  const setUserName = () => {
    updateProfile(auth.currentUser, {
      displayName: name
    }).then(() => {
     
    })

  }

    

  

    return {
        user,loginUsingEmailPassword, Setuser, SignInUsingGoogle, error, googleSignOut, RegisterUsingEmailPassword, handleEmailChange, handlePasswordChange, handleNameChange, email, password, isLoading, auth, getAuth
    }
 
    




}

export default Usefirebase