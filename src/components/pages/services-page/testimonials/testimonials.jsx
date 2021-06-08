import React from 'react';
import styles from './testimonials.module.scss';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import './owl-stage.css';

const testimonials = () => {
    return (
        <div className={styles.testimonials}>
            <div className={styles.testimonials__overlay}>
                <div className={styles.line}></div>
                <h3>Testimonials</h3>
                <OwlCarousel 
                    loop 
                    autoplay 
                    smartSpeed={650}
                    items={1} 
                    className={styles.testimonials__list}
                    dots={true}
                >
                    <div className={`${styles.testimonials__listItem}`}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel tortor facilisis, volutpat nulla placerat, tincidunt mi. Nullam vel orci dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel tortor facilisis, volutpat nulla placerat, tincidunt mi. Nullam vel orci dui.</p>
                        <h5>Heading #1</h5>
                    </div>
                    <div className={styles.testimonials__listItem}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel tortor facilisis, volutpat nulla placerat, tincidunt mi. Nullam vel orci dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel tortor facilisis, volutpat nulla placerat, tincidunt mi. Nullam vel orci dui.</p>
                        <h5>Heading #2</h5>
                    </div>
                    <div className={styles.testimonials__listItem}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel tortor facilisis, volutpat nulla placerat, tincidunt mi. Nullam vel orci dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel tortor facilisis, volutpat nulla placerat, tincidunt mi. Nullam vel orci dui.</p>
                        <h5>Heading #3</h5>
                    </div>
                    <div className={styles.testimonials__listItem}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel tortor facilisis, volutpat nulla placerat, tincidunt mi. Nullam vel orci dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel tortor facilisis, volutpat nulla placerat, tincidunt mi. Nullam vel orci dui.</p>
                        <h5>Heading #4</h5>
                    </div>
                    <div className={styles.testimonials__listItem}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel tortor facilisis, volutpat nulla placerat, tincidunt mi. Nullam vel orci dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel tortor facilisis, volutpat nulla placerat, tincidunt mi. Nullam vel orci dui.</p>
                        <h5>Heading #5</h5>
                    </div>
                </OwlCarousel>
            </div> {/*-- .testimonials__overlay end --*/}
            <div className={styles.testimonials__image}></div> {/*-- .testimonials__image end --*/}
        </div>
    );
};

export default testimonials;