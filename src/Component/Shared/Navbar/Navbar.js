import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hook/UseAuth';
import './Navbar.css'



const Navbar = () => {

    const {user, googleSignOut} = useAuth();

    
    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-light bg-white ">
                <div className="container-fluid">
                    <Link className="navbar-brand">

                        <img src="/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" class="d-inline-block align-text-top"/>
                        HosPiTal.com
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto  ">
                            
                            
                            <Link to='/home' className="nav-link items fw-bold" > Home </Link>
                            <Link className="nav-link items fw-bold" > About </Link>
                            <Link to="/services" className="nav-link items fw-bold" > Services </Link>
                            <Link className="nav-link items fw-bold" > Appointment </Link>
                            <Link className="nav-link items fw-bold" > Doctors </Link>
                            <Link className="nav-link items fw-bold" > Contact Us </Link>
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