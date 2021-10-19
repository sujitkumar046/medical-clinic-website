import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';


import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';





const Appointment = () => {

    


    const [Services, Setservices] = useState([]);
    const {appointmentID} = useParams();

    const [singleService, setSingleService] = useState({});
  
   
    useEffect(() => {
      fetch("/Servicedata.json")
        .then((res) => res.json())
        .then((data) => Setservices(data));
    }, []);
  
    
    useEffect(() => {
      const foundService = Services.find(({name}) => name === appointmentID
      );
      setSingleService(foundService);
    }, [Services]);
   

   

    

    

    return (
        

        <>
        
        <Navbar></Navbar>
        <div className='row container-fluid m-2 g-4'>

            <div className='col-md-4 col-lg-4 col-sm-12'>
                <img src={singleService?.img} alt="" />

            </div>
            <div className='col-md-5 col-lg-5 col-sm-12'>

            <h2 className=' text-success'> {singleService?.name}</h2>
           
            <p>{singleService?.description} </p>
            
            <Link to='/bookappointment'> <button className='btn btn-danger'>Make Appointment</button></Link>
           

            </div>

            
                


        </div>
        <Footer></Footer>
        </>
    );
};

export default Appointment;