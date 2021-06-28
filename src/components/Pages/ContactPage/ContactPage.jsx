import React from 'react';

import Navigation from '../../Navigation/Navigation';
import Header from './Header/Header';
import ContactForm from './ContactForm/ContactForm.tsx';

const ContactPage = () => {
    return (
        <div className="conactPage">
            <Navigation />
            <Header />
            <ContactForm isNew={true} text="It Works"/>
        </div>
    );
};

export default ContactPage;