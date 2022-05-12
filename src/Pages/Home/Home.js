import React from 'react';
import Banner from './Banner/Banner';
import HomeContact from './HomeContact/HomeContact';
import Info from './Info/Info';
import MakeAppointment from './MakeApointment/MakeAppointment';
import Services from './Services/Services';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <HomeContact></HomeContact>
        </div>
    );
};

export default Home;