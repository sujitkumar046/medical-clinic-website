import React from 'react';
import { Link } from 'react-router-dom';
import Usedata from '../../../Hook/Usedata'
import './Services.css'

const Services = () => {



    
   const {services} =  Usedata();

   
    return (

        <>
           

         <div className='row container-fluid'>
             <h1 className='text-start border-bottom'>Our Services</h1>
           {

           services.map (service => 
           <div className='col-md-4 g-4'>
    
             <div className='card mb-3'>
                 <div className='row g-0"'>
                     <div className='col-md-4'>
                        <img  src={service.img} class=" card-img d-block mx-auto rounded-circle" alt="..."/>
                     </div>
                     <div className='col-md-8'>
                         <div className='card-body ms-2'>
                            <h5 className="text-start card-title">{service.name}</h5>
                            <p className=' text-start card-text'>{service.description.slice (0,75)}</p>
                        
                            


                         </div>
                         
                         
                     </div>
                     
                     <Link to={`/appointment/${service.name}`}>
                                <button className='btn btn-success'>check details</button>
                            </Link>
                 </div>
                


             </div>


           </div>)
           
           
           }
         
        </div>
        

    </>
    );
};

export default Services;