import React from 'react';

import Navigation from '../../navigation/navigation';
import Header from './header/header';
import ImageList from './imageList/imageList';

const portfolioPage = () => {
    return (
        <div className="portfolioPage">
            <Navigation />
            <Header />
            <ImageList />
        </div>
    );
};

export default portfolioPage;