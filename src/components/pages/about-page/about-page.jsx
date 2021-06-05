import React from 'react';

import Navigation from '../../navigation/navigation';
import Header from './header/header';
import Qualities from './qualities/qualities';

const aboutPage = () => {
    return (
        <div className="aboutPage">
            <Navigation />
            <Header />
            <Qualities />
        </div>
    );
};

export default aboutPage;