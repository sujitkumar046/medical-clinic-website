import React from 'react';

const Welcome = () => {
    return (
        <div className='row container-fluid p-2 my-5 '>
            <div className='col-md-6 col-lg-6 col-sm-12'>
                 <img src="https://jthemes.net/themes/html/medservices/files/images/image-03.png" alt="" />
            </div>
            <div className='col-md-6 col-lg-6 col-sm-12 d-block justify-content-center mt-5 p-5'>
                <h4 className='text-primary text-start'>Welcome to MedServices</h4> <br />
                <h2 className='text-start'>Complete Medical Solutions in One Place</h2>
                <br />

                <p className='text-start'>Porta semper lacus cursus, feugiat primis ultrice in ligula risus auctor tempus feugiat dolor lacinia cubilia curae integer congue leo metus, eu mollislorem primis in orci integer metus mollis faucibus. An enim nullam tempor sapien gravida donec pretium and ipsum porta justo integer at velna vitae auctor integer congue</p>
                <br />

                <p className='text-start'>Randon Pexon, Head of Clinic</p>

                <img className='d-block' style={{height:'20px'}} src="https://jthemes.net/themes/html/medservices/files/images/signature.png" alt="" />




            </div>
            
        </div>
    );
};

export default Welcome;