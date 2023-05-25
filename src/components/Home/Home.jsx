import React from 'react';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Packages from '../../pages/Packages/Packages';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Packages></Packages>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;