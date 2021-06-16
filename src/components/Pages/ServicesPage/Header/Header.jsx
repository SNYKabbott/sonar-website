import React from 'react';
import styles from './Header.module.scss';

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.header__image}></div> {/*-- .header__image end --*/}
            <div className={styles.header__info}>
                <div className={styles.line}></div>
                <h2>I provide top quality services</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel tortor facilisis, volutpat nulla placerat, tincidunt mi. Nullam vel orci dui.</p>
                <a href="placeholder" className={styles.header__info__button}>Contact Me</a>
            </div> {/*-- .header__info end --*/}
        </div>
    );
};

export default Header;