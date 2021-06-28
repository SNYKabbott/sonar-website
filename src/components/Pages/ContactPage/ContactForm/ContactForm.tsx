import React from 'react';
import styles from './ContactForm.module.scss';

interface ContactFormProps {
    isNew: boolean,
    userInput: string
};

const ContactForm: React.FC<ContactFormProps> = ({isNew, userInput}) => {
    return (
        <div className={styles.contactForm}>
            {isNew ? <h1>{userInput}</h1> : null}
        </div>
    );
};

export default ContactForm;