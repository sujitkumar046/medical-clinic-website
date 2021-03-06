import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import Banner from '../Banner/Banner';
import CustomerReview from '../CustomerReview/CustomerReview';
import Services from '../Services/Services';
import Welcome from '../Welcome/Welcome';

const Home = () => {
    return (
        <div>
          <Navbar></Navbar>
          <Banner></Banner>
          <Services></Services>
          <Welcome></Welcome>
          <CustomerReview></CustomerReview>
          <Footer></Footer>
        </div>
    );
};

export default Home;