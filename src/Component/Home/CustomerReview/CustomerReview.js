import React, { useEffect, useState } from 'react';
import './CustomerReview.css'

const CustomerReview = () => {

    const [feedbacks, Setfeedbacks] = useState([])

    useEffect(()=>{
        fetch('/customerfeedback.json')
        .then(res => res.json())
        .then (data => Setfeedbacks(data))
    }, [])
    return (
        <>
            <div className='row container-fluid my-5 feedback-container'>
            <h3 className='text-start border-bottom'>What Our Client's Say</h3>
           {
               feedbacks.map(feedback =>
               (<div className='col-md-4 col-lg-4 col-sm-12 g-5'>
                   <div className='card-group h-100'>
                       <div className="card card-color">
                            <img src={feedback.img} className="mx-auto d-block rounded-circle" alt="..."/>
                       <div className='card-body'>
                       <h5 className="card-title text-primary">{feedback.Name}</h5>
                        <h6 className="text-secondary"> Profession: {feedback.profession}</h6>
                        <br />
                        <h6 className="text-start fs-5"> "{feedback.description}"</h6>
                        
                       </div>

                       </div>

                   </div>

                    
               </div>
               )
               )
           }
            
           <div>
               <br />
            <button className='btn btn-lg btn-success m-3'>See All Reviews</button>
            </div>
        </div>


        </>
    );
};

export default CustomerReview;