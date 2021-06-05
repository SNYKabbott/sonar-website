import React from 'react';
import styles from './services.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const services = () => {
    return (
        <div className={styles.services}>
            <ul className={styles.services__list}>
                <li className={styles.services__listItem}>
                    <FontAwesomeIcon icon={faCoffee} />
                    <h5>Wedding Photography</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel tortor facilisis, volutpat nulla placerat, tincidunt mi. Nullam vel orci dui.</p>
                </li>
            </ul>
        </div>
    );
};

export default services;