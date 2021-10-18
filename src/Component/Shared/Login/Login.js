import React from 'react';
import useAuth from '../../../Hook/UseAuth';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const Login = () => {

    const { SignInUsingGoogle} = useAuth();
   
    return (

        <>
        <Navbar></Navbar>
        <div className='container m-5 border p-5'>
            <div>
                <form>
                    <input type="email" name="Email" id="email" placeholder='Enter Your Email' /> <br />
                    <input type="password" name="" id="password" placeholder='Enter password' />
                    <br />
                    <br />
                    <button className='btn btn-primary' type="submit">Submit</button> <br />
                    

    
                </form>

                <div className='m-2'>
                <button className='btn btn-warning' onClick={SignInUsingGoogle}>Google Sign in</button>
                </div>

                
                    
            </div>
        </div>
        <Footer></Footer>
        </>
    );
};

export default Login;