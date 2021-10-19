import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const BookAppointment = () => {
    return (
        <div>
            <div>
               <Navbar></Navbar>
            </div>

            <div className='container text-start row m-2'>

                <h1 className='border-bottom mb-2'>
                Book Appointment
                </h1>

                <br />

                <p>
                If you want to book an appointment, please feel free to do that. You just need to fill up the form below, it will take only a minute. We will reply to you as soon as possible, depending on how many queries are waiting in the queue. 
                </p>
                <br />

                <div className="col-md-8 col-lg-8 col-sm-12 ">
                    <input className='w-75' type="text" placeholder='Your Name' /> <br /> <br />
                    <input className='w-75' type="text" placeholder='Select Department' /> <br /> <br />
                    <input className='w-75' type="text" placeholder='Select Doctor' /><br /> <br />
                    <textarea className='w-75' name="Your Message" id="" cols="30" rows="10" placeholder='Your Message'></textarea>
                   
                   
                 
                </div>

                <br />
                <button className='btn btn-success w-50 ms-2'>Book Your Appointment</button>


            </div>

               


         


            <div>
                <Footer></Footer>
            </div>
        </div>
       
    );
};

export default BookAppointment;