import React, { useState } from 'react';
import styles from './header.module.scss';

const Header = () => {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.header}>
            <div className={styles.header__image}></div> {/*-- .header__image end --*/}
            <div className={styles.header__info}>
                <div className={styles.line}></div> {/*-- .line end --*/}
                <h1>Contact Me</h1>
                <button onClick={() => setCount(count - 1)}>Subtract</button>
                <h1>{count}</h1>
                <button onClick={() => setCount(count + 1)}>Add</button>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel tortor facilisis, volutpat nulla placerat, tincidunt mi. Nullam vel orci dui.</p>
                <a href="placeholder" className={styles.header__info__button}>Contact Me</a>
            </div> {/*-- .header__info end --*/}
        </div>
    );
};

export default Header;