import React from 'react';
import styles from './app.module.css';

import HomePage from '../pages/home-page/home-page';
import AboutPage from '../pages/about-page/about-page';
import ServicesPage from '../pages/services-page/services-page';
import PortfolioPage from '../pages/portfolio-page/portfolio-page';
import ContactPage from '../pages/contact-page/contact-page';

const app = () => {
    return (
        <div className={styles.app}>
            <ContactPage />
        </div>
    );
};

export default app;