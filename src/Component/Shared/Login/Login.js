import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import intialAuthetication from '../../../Firebase/Firebase.init';
import useAuth from '../../../Hook/UseAuth';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";

intialAuthetication();





const Login = () => {

    

    
    const {SignInUsingGoogle,handleEmailChange, handlePasswordChange, error, email, password, loginUsingEmailPassword} = useAuth();
    const location = useLocation();
    const history = useHistory();
   
    


    const redirect_URL = location.state?.from || './home' ;

    
    // const loginUsingEmailPassword = (e) => {
    // e.preventDefault()
    // signInWithEmailAndPassword(auth, email, password)
    // .then((result) => {
    // Setuser (result.user)
    // Seterror('')
    // })
    // .catch((error) => {
    //  Seterror('Wrong password or')
    // })
    // .finally (() => {
    //     history.push (redirect_URL);
    // }
    

    const handleSignIn = () => {

        SignInUsingGoogle()
            .then (result => {
            history.push (redirect_URL);
        })
    }


   
   
    return (

        <>
        <Navbar></Navbar>
        <div className='row col-lg-11 col-md-11 col-sm-12 container-fluid ms-3 border '>
            <h3 className='text success'>Please login</h3>
            <br />
            <div>
                <form onSubmit={loginUsingEmailPassword}>
                    <label className='text-primary fs-4 me-2' htmlFor="email">Email:</label>
                    <input onBlur={handleEmailChange} type="email" name="Email" id="email" placeholder='Enter Your Email' /> <br /> 
                    <label className='text-primary fs-4 me-2' htmlFor="password">Password:</label>
                    <input onBlur={handlePasswordChange} type="password" name="" id="password" placeholder='Enter password' />
                    <br />
                    <br />

                    <div className='text-danger'>
                        <p>{error}</p>
                        <p>{error.message}</p>
                    </div>
                    <button className='btn btn-primary' type="submit">Submit</button> <br />
                    
                    

    
                </form>

                <div className='m-2'>
                <p> Don't have an account? <Link to='/register'>Create Account</Link> </p>
                
                </div>

                
                    
            </div>
        </div>
        <Footer></Footer>
        </>
    );
};

export default Login