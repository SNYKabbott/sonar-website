import React from 'react';

import Navigation from '../../Navigation/Navigation';
import Header from './Header/Header';
import Services from './Services/Services';
import Testimonials from './Testimonials/Testimonials';
import Stats from './Stats/Stats';
import Footer from './Footer/Footer';

const ServicesPage = () => {
    return (
        <div className="placeholder">
            <Navigation />
            <Header />
            <Services />
            <Testimonials />
            <Stats />
            <Footer />
        </div>
    );
};

export default ServicesPage;