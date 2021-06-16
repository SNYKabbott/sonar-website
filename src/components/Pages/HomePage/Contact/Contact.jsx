import React from 'react';
import styles from './Contact.module.scss';

const Contact = () => {
    return (
        <div className={styles.contact}>
            <h3>I am an experienced photographer</h3>
            <span>Let's talk</span>
            <a href="placeholder" className={styles.contact__button}>Contact Me</a>
        </div>
    );
};

export default Contact;