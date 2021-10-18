import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
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
                            <Link className="nav-link items fw-bold" > Home </Link>
                            <Link className="nav-link items fw-bold" > About </Link>
                            <Link className="nav-link items fw-bold" > Services </Link>
                            <Link className="nav-link items fw-bold" > Appointment </Link>
                            <Link className="nav-link items fw-bold" > Doctors </Link>
                            <Link className="nav-link items fw-bold" > Contact Us </Link>
                
                        </div>
                    </div>
                </div>
            </nav>





        </>
    );
};

export default Navbar;