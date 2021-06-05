import React from 'react';

import Header from './header/header';
import Navigation from '../../navigation/navigation';
import Main from './main/main';
import Contact from './contact/contact';

const homePage = () => {
    return (
        <div className="homePage">
            <Navigation />
            <Header />
            <Main />
            <Contact />
        </div>
    );
};

export default homePage;