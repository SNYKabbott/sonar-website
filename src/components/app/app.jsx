import React from 'react';
import styles from './App.module.css';

import HomePage from '../Pages/HomePage/HomePage';
import AboutPage from '../Pages/AboutPage/AboutPage';
import ServicesPage from '../Pages/ServicesPage/ServicesPage';
import PortfolioPage from '../Pages/PortfolioPage/PortfolioPage';
import ContactPage from '../Pages/ContactPage/ContactPage';


const App = () => {
    return (
        <div className={styles.app}>
            <ContactPage />
        </div>
    );
};

export default App;