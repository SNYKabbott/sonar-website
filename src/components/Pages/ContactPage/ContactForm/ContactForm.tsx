import React, {useRef, useEffect} from 'react';
import styles from './ContactForm.module.scss';

interface ContactFormProps {
    isNew: boolean,
    userInput: string
};

const ContactForm: React.FC<ContactFormProps> = ({isNew, userInput}) => {
    const headingRef = useRef<HTMLHeadingElement>(document.createElement('h1'));

    return (
        <div className={styles.contactForm}>
            <h1 ref={headingRef} onClick={() => console.log(headingRef.current.innerHTML)}>23</h1>
        </div>
    );
};

export default ContactForm;