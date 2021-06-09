import React from 'react';
import styles from './navigation.module.scss';

const navigation = () => {
    return (
        <ul className={styles.navigationList}>
            <li className={`${styles.navigationList__item} ${styles.activeLink}`}>
                All
            </li>
            <li className={styles.navigationList__item}>
                Landscapes
            </li>
            <li className={styles.navigationList__item}>
                Portraits
            </li>
            <li className={styles.navigationList__item}>
                Fashion
            </li>
            <li className={styles.navigationList__item}>
                Studio
            </li>
        </ul>
    );
};

export default navigation;