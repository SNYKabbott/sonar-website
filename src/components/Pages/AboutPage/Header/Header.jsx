import React from 'react';
import styles from './Header.module.scss';

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.header__image}></div> {/*-- .header__image end --*/}
            <div className={styles.header__info}>
                <div className={styles.line}></div>
                <h1>Hello, My name is Austin Tulloch and I am an experienced photographer</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel tortor facilisis, volutpat nulla placerat, tincidunt mi. Nullam vel orci dui. Suspendisse sit amet laoreet neque. Fusce sagittis suscipit sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel tortor facilisis, volutpat nulla placerat, tincidunt mi. Nullam vel orci dui. Suspendisse sit amet laoreet neque. Fusce sagittis suscipit sem.</p>
                <a href="placeholder" className={styles.header__info__button}>Contact Me</a>
            </div> {/*-- .header__info end --*/}
        </div>
    );
};

export default Header;