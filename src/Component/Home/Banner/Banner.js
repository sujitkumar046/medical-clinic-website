import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
      <>
      <div className='row my-5 container-fluid'>
        <div className='col-md-6 col-lg-6 sm-col-11'> 
          <img className='img-fluid' src="https://jthemes.net/themes/html/medservices/files/images/hero-1-img.png" alt="" />
        </div>
        <div className='col-md-6 col-lg-6 sm-col-11 p-5'> 
        <h4 className='text-primary text-start'>Welcome Our Clinic</h4>
        <br />
        <h1 className='text-success text-start fs-1 fw-bold'>TAKE CARE OF YOUR HEALTH</h1>
        <br />
        <p className=' text-start '>Feugiat primis ligula risus auctor egestas augue mauri viverra tortor in iaculis placerat eugiat mauris ipsum in viverra tortor and gravida purus pretium lorem primis in orci integer mollis
        <br />
        <br />
        <button className='btn btn-dark'>More About Clinic</button>

</p>



        </div>


      </div>


        
      </>

    );
};

export default Banner;