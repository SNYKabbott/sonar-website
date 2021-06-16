import React from 'react';

import Navigation from '../../Navigation/Navigation';
import Header from './Header/Header';
import ImageList from './ImageList/ImageList';

const PortfolioPage = () => {
    return (
        <div className="portfolioPage">
            <Navigation />
            <Header />
            <ImageList />
        </div>
    );
};

export default PortfolioPage;