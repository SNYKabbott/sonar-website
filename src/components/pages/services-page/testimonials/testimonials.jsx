import React from 'react';
import styles from './testimonials.module.scss';

const testimonials = () => {
    return (
        <div className={styles.testimonials}>
            <div className={styles.testimonials__overlay}>
                <div className={styles.line}></div>
                <h3>Testimonials</h3>
            </div> {/*-- .testimonials__overlay end --*/}
            <div className={styles.testimonials__image}>
                <img src="https://preview.colorlib.com/theme/sonar/img/bg-img/tes.jpg.webp" alt="Rocky Mountains"/>
            </div> {/*-- .testimonials__image end --*/}
        </div>
    );
};

export default testimonials;