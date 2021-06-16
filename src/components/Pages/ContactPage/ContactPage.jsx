import React from 'react';

import Navigation from '../../Navigation/Navigation';
import Header from './Header/Header';
import ContactForm from './ContactForm/ContactForm';

const ContactPage = () => {
    return (
        <div className="conactPage">
            <Navigation />
            <Header />
            <ContactForm />
        </div>
    );
};

export default ContactPage;