import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hook/UseAuth';
import './Navbar.css'



const Navbar = () => {

    const {user, googleSignOut } = useAuth();

    
    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-light bg-white ">
                <div className="container-fluid m-2">
                    <Link to='/home' className="navbar-brand">

                        <img height='50px' width='200px' className='img-fluid' src="https://jthemes.net/themes/html/medservices/files/images/footer-logo.png" alt=""  class="d-inline-block align-text-top"/>
                      
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto  ">
                            
                            
                            <Link to='/home' className="nav-link items fw-bold" > Home </Link>
                            <Link to='/about' className="nav-link items fw-bold" > About </Link>
                            <Link to="/services" className="nav-link items fw-bold" > Services </Link>
                
                            <Link to='/doctor' className="nav-link items fw-bold" > Doctors </Link>
                            <Link to='/bookappointment' className="nav-link items fw-bold" > Book Apointment </Link>
                             <Link to='/payment' className="nav-link items fw-bold" > Payment </Link> 
                            <span className='m-2 text-danger fw-bold'> {user.displayName}</span>
                           {user.email ? <button className='m-2 btn btn-primary' onClick={googleSignOut}>Log Out</button> : <Link to="/login" className="nav-link items fw-bold" > Login </Link> }
                
                        </div>
                    </div>
                </div>
            </nav>





        </>
    );
};

export default Navbar;