import React, { useEffect, useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const Doctors = () => {
    const [doctors, Setdoctors] = useState([])
    useEffect (() => {
        fetch('/Doctors.json')
        .then (res => res.json())
        .then (data => Setdoctors (data))
    }, [])
    return (
        <>
        <Navbar></Navbar>
         <div className='row container-fluid my-5 feedback-container'>
            <h3 className='text-start border-bottom'> Meet Our Doctors</h3>
           {
               doctors.map (doctor => 
               (<div className='col-md-4 col-lg-4 col-sm-12 g-5'>
                   <div className='card-group h-100 feedbackcard'>
                       <div className="card card-color">
                            <img src={doctor.img} className="mx-auto d-block rounded-circle" alt="..."/>
                       <div className='card-body feedbackcard-body'>
                       <h5 className="card-title text-primary">{doctor.Name}</h5>
                        <h6 className="text-danger"> Country: {doctor.Country}</h6>
                        <br />
                        <h4 className="text-dark"> {doctor.Specilization}</h4>
                        
                       </div>

                       </div>

                   </div>

                    <div>
                        <button className='btn btn-warning fw-bold'>Contact Details</button>
                    </div>
               </div>) )
           }
        </div>
            <Footer></Footer>
        </>
    );
};

export default Doctors;