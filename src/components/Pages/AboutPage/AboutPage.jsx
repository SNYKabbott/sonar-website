import React from 'react';

import Navigation from '../../Navigation/Navigation';
import Header from './Header/Header';
import Qualities from './Qualities/Qualities';

const AboutPage = () => {
    return (
        <div className="aboutPage">
            <Navigation />
            <Header />
            <Qualities />
        </div>
    );
};

export default AboutPage;