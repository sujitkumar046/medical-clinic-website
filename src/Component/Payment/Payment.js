import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const Payment = () => {
    return (

        <>
        <Navbar></Navbar>
        <div className='container-fluid'>
            <h2>Our Payment Gateway</h2>
            <button className='btn btn-danger'>Please Proceed to Payment</button>
        </div>
        <Footer></Footer>
        </>
    );
};

export default Payment;