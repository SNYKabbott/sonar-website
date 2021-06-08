import React from 'react';

import Navigation from '../../navigation/navigation';
import Header from '../services-page/header/header';
import Services from '../services-page/services/services';
import Testimonials from '../services-page/testimonials/testimonials';
import Stats from '../services-page/stats/stats';
import Footer from '../services-page/footer/footer';

const servicesPage = () => {
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

export default servicesPage;