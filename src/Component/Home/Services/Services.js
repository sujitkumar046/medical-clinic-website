import React from 'react';
import Usedata from '../../../Hook/Usedata';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import './Services.css'

const Services = () => {



    
   const {services} =  Usedata();
//    console.log (services)
   
    return (

        <>
            <Navbar></Navbar>

         <div className='row container-fluid'>
           {

           services.map (service => 
           <div className='col-md-4 g-4'>
             <div className='card mb-3'>
                 <div className='row g-2"'>
                     <div className='col-md-4'>
                        <img  src={service.img} class=" card-img mx-auto d-block  rounded-circle" alt="..."/>
                     </div>
                     <div className='col-md-8'>
                         <div className='card-body ms-2'>
                            <h5 className="text-start card-title">{service.name}</h5>
                            <p className=' text-start card-text'>{service.description.slice (0,75)}</p>
                            <button className='btn btn-success'>check details</button>


                         </div>
                         
                     </div>
                     

                 </div>
                 


             </div>


           </div>)
           
           
           }
        </div>
        

    </>
    );
};

export default Services;