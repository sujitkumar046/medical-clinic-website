import React from 'react';

const Welcome = () => {
    return (
        <div className='row container-fluid p-2 my-5 '>
            <div className='col-md-6 col-lg-6 col-sm-12'>
                 <img className='img-fluid' src="https://jthemes.net/themes/html/medservices/files/images/image-03.png" alt="" />
            </div>
            <div className='col-md-6 col-lg-6 col-sm-12 d-block justify-content-center mt-5 p-2'>
                <h4 className='text-primary text-start'>Welcome to MedServices</h4> <br />
                <h2 className='text-start'>Complete Medical Solutions in One Place</h2>
                <br />

                <p className='text-start'>Welcome to one stop door for all medical facilities. You'll never be disappointed with our service. Our team are committed and dedicated to provide best guidlines and treatment for any patient</p>
                <br />

                <p className='text-start'>Randon Pexon, Head of Clinic</p>

                <img className='d-block' style={{height:'20px'}} src="https://jthemes.net/themes/html/medservices/files/images/signature.png" alt="" />




            </div>
            
        </div>
    );
};

export default Welcome;