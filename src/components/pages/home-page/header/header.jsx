import React from 'react';
import styles from './header.module.scss';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import './owl-stage.css';

const header = () => {
    return (
        <div className={styles.header}>
            <OwlCarousel 
                className={styles.imageList} 
                loop 
                autoplay 
                smartSpeed={750}
                responsive={{
                    0: {
                        items: 1
                    },
                    650: {
                        items: 2
                    },
                    1000: {
                        items: 3
                    }
                }}
            >
                <div className={`${styles.imageList__item} ${styles.secondItem}`}>
                    <div className={styles.content}>
                        <div className={styles.line}></div> { /*-- .line end --*/ }
                        <h3>Mountain Hike</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel tortor facilisis, volutpat nulla placerat, tincidunt mi. Nullam vel orci dui. Suspendisse sit amet laoreet neque. Fusce sagittis suscipit sem.</p>
                    </div> { /*-- .header__listItem__content end --*/ }
                </div> { /*-- .styles.imageList__item end --*/ }
                <div className={`${styles.imageList__item} ${styles.thirdItem}`}>
                    <div className={styles.content}>
                        <div className={styles.line}></div> { /*-- .line end --*/ }
                        <h3>The Desert</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel tortor facilisis, volutpat nulla placerat, tincidunt mi. Nullam vel orci dui. Suspendisse sit amet laoreet neque. Fusce sagittis suscipit sem.</p>
                    </div> { /*-- .header__listItem__content end --*/ }
                </div> { /*-- .styles.imageList__item end --*/ }
                <div className={`${styles.imageList__item} ${styles.fourthItem}`}>
                    <div className={styles.content}>
                        <div className={styles.line}></div> { /*-- .line end --*/ }
                        <h3>New York View</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel tortor facilisis, volutpat nulla placerat, tincidunt mi. Nullam vel orci dui. Suspendisse sit amet laoreet neque. Fusce sagittis suscipit sem.</p>
                    </div> { /*-- .header__listItem__content end --*/ }
                </div> { /*-- .styles.imageList__item end --*/ }
                <div className={styles.imageList__item}>
                    <div className={styles.content}>
                        <div className={styles.line}></div> { /*-- .line end --*/ }
                        <h3>Sand Storm</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel tortor facilisis, volutpat nulla placerat, tincidunt mi. Nullam vel orci dui. Suspendisse sit amet laoreet neque. Fusce sagittis suscipit sem.</p>
                    </div> { /*-- .header__listItem__content end --*/ }
                </div> { /*-- .styles.imageList__item end --*/ }
            </OwlCarousel>
        </div>
    );
};

export default header;