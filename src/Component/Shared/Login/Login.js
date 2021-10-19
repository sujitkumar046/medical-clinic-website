import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hook/UseAuth';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const Login = () => {

    
    const {SignInUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    


    const redirect_URL = location.state?.from || './home' ;

    const handleSignIn = () => {
        SignInUsingGoogle()
            .then (result => {
            history.push (redirect_URL);
        })
    }


   
    return (

        <>
        <Navbar></Navbar>
        <div className='row container m-5 border p-5'>
            <h3 className='text success'>Please login</h3>
            <br />
            <div>
                <form>
                    <input type="email" name="Email" id="email" placeholder='Enter Your Email' /> <br />
                    <input type="password" name="" id="password" placeholder='Enter password' />
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