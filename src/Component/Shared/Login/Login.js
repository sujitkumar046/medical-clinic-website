import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hook/UseAuth';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const Login = () => {

    

    
    const {SignInUsingGoogle,handleEmailChange, handlePasswordChange, loginUsingEmailPassword} = useAuth();
    const location = useLocation();
    const history = useHistory();
   
    


    const redirect_URL = location.state?.from || './home' ;
   

    const handleSignIn = () => {
        
        SignInUsingGoogle()
            .then (result => {
            history.push (redirect_URL);
        })
    }


    // const HandleSignInEmailPassword = () => {

    //     loginUsingEmailPassword (email, password)
    //     .then (result => {
    //         HisTory.push (redirectURL);
    //     })
    // }
   

  
   
    return (

        <>
        <Navbar></Navbar>
        <div className='row container m-5 border p-5'>
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
                    <button className='btn btn-primary' type="submit">Submit</button> <br />
                    
                    

    
                </form>

                <div className='m-2'>
                <p> Don't have an account? <Link to='/register'>Create Account</Link> </p>
                <button className='btn btn-warning' onClick={handleSignIn}>Google Sign in</button>
                </div>

                
                    
            </div>
        </div>
        <Footer></Footer>
        </>
    );
};

export default Login;