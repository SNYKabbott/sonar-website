import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <h2>I am an experienced photographer</h2>
            <span>Let’s talk</span>
            <a href="placeholder" className={styles.footer__button}>Contact Me</a>
        </div>
    );
};

export default Footer;