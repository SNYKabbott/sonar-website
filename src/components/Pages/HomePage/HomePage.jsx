import React from 'react';

import Header from './Header/Header';
import Navigation from '../../Navigation/Navigation';
import Main from './Main/Main';
import Contact from './Contact/Contact';

const HomePage = () => {
    return (
        <div className="homePage">
            <Navigation />
            <Header />
            <Main />
            <Contact />
        </div>
    );
};

export default HomePage;