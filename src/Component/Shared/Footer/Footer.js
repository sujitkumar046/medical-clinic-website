import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
    <div className='container-fluid mt-5 border-top pt-5'>
        <div className='row g-3'>
            <div className='col-md-3 col-lg-3 ms-3 col-sm-6' >
                
                <img height='40px' src="https://jthemes.net/themes/html/medservices/files/images/footer-logo.png" alt="" />

                <p className='mt-3 ms-3 text-start'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus veritatis assumenda vero cum! Placeat ad sit i !
                </p>

                <div className="d-flex text-center fs-3 ms-3 ">
                  <div>
                  <i class="fab fa-facebook"></i>
                  </div>
                  <div className="ms-2">
                    <i className="fab fa-twitter"></i>
                  </div>
                  <div className="ms-2">
                    <i className="fab fa-youtube"></i>
                  </div>
                  <div className="ms-2">
                  <i className="fab fa-facebook-square"></i>
                  </div>
                </div>
           
                

            </div>


            <div className='col-md-3 col-lg-3 col-sm-4 ms-4'>
               <h3 className='text-start'>Our Location</h3>
               <p className='text-start'>
                121 King Street, Melbourne,

                Victoria 3000 Australia
               </p>
               <p className='text-start' >
                    E-mail: <span className='fw-bold text-underline'>hello@medservice.com</span> 
                    <br />

                    Phone: +12 9 8765 4321
               </p>


           </div>

            <div className='col-md-2 col-lg-2 col-sm-6 ms-2 me-2' >
                <ul className='text-white'>
                    <Link className="nav-link text-start fw-bold text-dark ms-3 " > Home </Link>
                    <Link className="nav-link text-start fw-bold text-dark ms-3" > About </Link>
                    <Link className="nav-link text-start fw-bold text-dark ms-3" > Services </Link>
                    <Link className="nav-link text-start fw-bold text-dark ms-3" > Appointment </Link>
                    <Link className="nav-link text-start fw-bold text-dark ms-3" > Doctors </Link>
                    <Link className="nav-link text-start fw-bold text-dark ms-3" > Contact Us </Link>
                
                </ul>
            </div>

            <div className='col-md-3 col-lg-3 col-sm-6 ms-3'>
                <h3 className='text-start'>Emergency Cases</h3>
                <h2 className='text-primary text-start'>01-800-123-4560</h2>
                <p  className='text-start'>Aliquam orci nullam undo tempor sapien gravida donec enim ipsum porta justo velna aucto magna</p>

            </div>


        </div>
 
     <div className='my-5 border-top'>
         <br />
         <p className='text-start ms-4'> © 2019 <span className='fw-bold'>MedService</span> All Rights Reserved </p>
     </div>
        
      
    </div>
    );
};

export default Footer;


/* 

<div className="footer-container p-3 text-white mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="left-container text-start">
                <h1>HosPital.com</h1>
                
                <div className="d-flex text-center text-white fs-3 ">
                  <div>
                    <i className="fab fa-instagram-square"></i>
                  </div>
                  <div className="ms-2">
                    <i className="fab fa-twitter"></i>
                  </div>
                  <div className="ms-2">
                    <i className="fab fa-youtube"></i>
                  </div>
                  <div className="ms-2">
                  <i className="fab fa-facebook-square"></i>
                  </div>
                </div>
                 
                <p className="mt-5">
                  <small>HosPital.com © . All rights reserved.</small>
                </p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer-menu-container">
        <ul>
            <Link className="nav-link items " > Home </Link>
            <Link className="nav-link items fw-bold" > About </Link>
            <Link className="nav-link items fw-bold" > Services </Link>
            <Link className="nav-link items fw-bold" > Appointment </Link>
            <Link className="nav-link items fw-bold" > Doctors </Link>
            <Link className="nav-link items fw-bold" > Contact Us </Link>
                
                </ul>
              </div>
            </div>
            <div className="col-md-5">
              <div>
               
                <div className="phone d-flex align-items-center justify-content-center mt-4">
                  <div className="text-warning fw-bold fs-3">
                    <i class="fas fa-phone"></i>
                  </div>
                  <div>
                    <h5>+8801722345431</h5>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-center">
                  <div className="text-warning fw-bold fs-3">
                    <i className="fas fa-map-marked"></i>
                  </div>
                  <div>
                    <p>
                     
                      <br /> Bogura Sadar, Bogura
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
*/