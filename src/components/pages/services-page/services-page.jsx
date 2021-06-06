import React from 'react';

import Navigation from '../../navigation/navigation';
import Header from '../services-page/header/header';
import Services from '../services-page/services/services';
import Testimonials from '../services-page/testimonials/testimonials';

const servicesPage = () => {
    return (
        <div className="placeholder">
            <Navigation />
            <Header />
            <Services />
            <Testimonials />
        </div>
    );
};

export default servicesPage;