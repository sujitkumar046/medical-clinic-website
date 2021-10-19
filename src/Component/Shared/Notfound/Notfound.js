import React from 'react';
import { useHistory } from 'react-router-dom';

const Notfound = () => {

    let history = useHistory();


    const handleClick = () => {
        history.push ("/home");


    } 

    return (
        <div className='row'>
            <div className='col-sm-12 col-md-12 col-lg-12 m-5'>
                <h3>Page doesn't exists</h3>
                 <button onClick={handleClick} className='btn btn-primary'>Go to Homepage</button>
            </div>
            
        </div>
    );
};

export default Notfound;