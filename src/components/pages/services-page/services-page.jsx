import React from 'react';

import Navigation from '../../navigation/navigation';
import Header from '../services-page/header/header';
import Services from '../services-page/services/services';

const servicesPage = () => {
    return (
        <div className="placeholder">
            <Navigation />
            <Header />
            <Services />
        </div>
    );
};

export default servicesPage;