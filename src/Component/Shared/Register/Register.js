import React from 'react';
import { Link} from 'react-router-dom';
import useAuth from '../../../Hook/UseAuth';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const Register = () => {

   



    const {SignInUsingGoogle, handleEmailChange, handlePasswordChange, RegisterUsingEmailPassword, error, handleNameChange} = useAuth();



    return (

        <>
        <Navbar></Navbar>
        <div className='container m-5 border p-5'>
            <h3 className='text-success mb-2'>Please Register</h3>
            <br />
            <form  onSubmit={RegisterUsingEmailPassword}>
                    <input onBlur= {handleNameChange} className='m-1' type="text" name="" id="" placeholder='Enter Your Name' /> <br />
                    <input className='m-1' onBlur={handleEmailChange} type="email" name="" id="" placeholder='Enter Your Email' required/> 
                    <br />
                    <input className='m-1' onBlur={handlePasswordChange} type="password" name="" id="" placeholder='Enter Password' required/>
                    <br />
                    {/* <input type="password" name="" id="" placeholder='Re-enter password' required/>
                    <br /> */}

                    <div className='text-danger'>
                        <p>{error}</p>
                        <p>{error.message}</p>
                    </div>


                    <button className='btn btn-dark m-2' type="submit">Submit </button>
                    <p>Already have an account? <Link to='/login'>Please Login</Link> </p>

            </form>
            
            <button onClick={SignInUsingGoogle} className='btn btn-danger'>Google Sing In</button>



        </div>
        <Footer></Footer>
        </>
    );
};

export default Register;