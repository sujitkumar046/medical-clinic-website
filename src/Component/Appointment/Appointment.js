import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useState } from 'react/cjs/react.development';

import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';





const Appointment = () => {

    // const {services} =  Usedata();

    // const [appointments, Setapoointment] = useState([])
    // const {appointmentID} = useParams();
    // console.log(appointmentID)

    // useEffect (() => {
    //   fetch('/Servicedata.json')
    //  .then (res => res.json())
    //     .then (data => console.log(data)) }, [appointments])


    // useEffect ( () => {
    //     const result = appointments.filter( ({ name }) => name === appointmentID );
    //     console.log(result)
    

    // }, [appointments])


    const [Services, Setservices] = useState([]);
    const {appointmentID} = useParams();

    const [singleService, setSingleService] = useState({});
  
    //  data load howa
    useEffect(() => {
      fetch("/Servicedata.json")
        .then((res) => res.json())
        .then((data) => Setservices(data));
    }, []);
  
    // call hbe jokon amar shob data load hye state e set hbe
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
            <button className='btn btn-danger'>Make Appointment</button>

            </div>

            
                


        </div>
        <Footer></Footer>
        </>
    );
};

export default Appointment;