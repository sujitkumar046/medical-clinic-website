import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const About = () => {
    return (
        <>
        <Navbar></Navbar>
        <div className='container-fluid'>

        <h1 className='text-start border-bottom'> About US </h1>
           <br />

           <div className='text-start'>
           <p>
            Welcome to MedService, what we do? (Yeah, definitely it’s about Caring).
           </p>
           <p>
           This is our clinic to deliver you the best possible treatment
           </p>
           <p>
           We've professional highly trainer doctors to give you the best treatment
           </p>
           <p>
           Our extraordinary laboratory and diagnostic facility will ensure that you always get the best treatment 
           </p>
           
           </div>
        </div>
        <Footer></Footer>
            
        </>
    );
};

export default About;