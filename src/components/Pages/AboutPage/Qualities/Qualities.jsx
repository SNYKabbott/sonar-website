import React from 'react';
import styles from './Qualities.module.scss';

const Qualities = () => {
    return (
        <div className={styles.qualities}>
            <div className={styles.qualities__info__container}>
                <div className={styles.qualities__info}>
                    <div className={styles.line}></div>
                    <h2>Look at my qualities</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel tortor facilisis, volutpat nulla placerat, tincidunt mi. Nullam vel orci dui. Suspendisse sit amet laoreet neque. Fusce sagittis suscipit sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel tortor facilisis, volutpat nulla placerat, tincidunt mi. Nullam vel orci dui. Suspendisse sit amet laoreet neque.</p>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>
                            <div className={styles.bar}></div>
                            <h5>Pacience</h5>
                            <span className={styles.percentage}>
                                80%
                            </span>
                        </li>
                        <li className={styles.listItem}>
                            <div className={styles.bar}></div>
                            <h5>Creativity</h5>
                            <span className={styles.percentage}>
                                100%
                            </span>
                        </li>
                        <li className={styles.listItem}>
                            <div className={styles.bar}></div>
                            <h5>Commited</h5>
                            <span className={styles.percentage}>
                                90%
                            </span>
                        </li>
                    </ul>
                </div> {/*-- .qualities__info end --*/}
            </div> {/*-- .qualities__info__container end --*/}
            <div className={styles.qualities__image}></div> {/*-- .qualities__image end --*/}
        </div>
    );
};

export default Qualities;