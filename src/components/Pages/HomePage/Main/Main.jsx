import React from 'react';
import styles from './Main.module.scss';

import mainImage1 from '../../../../images/main-image1.png';
import mainImage2 from '../../../../images/main-image2.png';
import mainImage3 from '../../../../images/main-image3.png';
import mainImage4 from '../../../../images/main-image4.png';
import mainImage5 from '../../../../images/main-image5.png';
import mainImage6 from '../../../../images/main-image6.png';
import mainImage7 from '../../../../images/main-image7.png';

const Main = () => {
    return (
        <main className={styles.main}>
            <div className={styles.main__container}>
                <h2 className={styles.mainHeading}>"In photography there is a reality so subtle that it becomes more <span>real</span> than reality."</h2>
                <div className={styles.images}>
                    <div className={styles.images__row1}>
                        <div className={`${styles.images__row1__image} ${styles.images__image}`}>
                            <img src={mainImage1} alt="Mountains"/>
                            <span>Feb 02, 2018</span>
                            <h3>Italy during sunset</h3>
                        </div> {/*-- .main__images__image end --*/}
                        <div className={`${styles.images__row1__image} ${styles.images__image}`}>
                            <img src={mainImage2} alt="Mountains"/>
                            <span>Feb 02, 2018</span>
                            <h3>Mountain Landscape</h3>
                        </div> {/*-- .main__images__image end --*/}
                    </div> {/*-- .main__images__row1 end --*/}
                    <div className={styles.images__row2}>
                        <div className={`${styles.images__row2__image} ${styles.images__image}`}>
                            <img src={mainImage3} alt="Mountains"/>
                            <span>Feb 02, 2018</span>
                            <h3>Foggy sunset over the lake</h3>
                        </div> {/*-- .main__images__image end --*/}
                        <div className={`${styles.images__row2__image} ${styles.images__image}`}>
                            <img src={mainImage4} alt="Mountains"/>
                            <span>Feb 02, 2018</span>
                            <h3>Clouds on mountain top</h3>
                        </div> {/*-- .main__images__image end --*/}
                    </div> {/*-- .main__images__row2 end --*/}
                    <div className={styles.images__row3}>
                        <div className={`${styles.images__row3__image} ${styles.images__image}`}>
                            <img src={mainImage5} alt="Mountains"/>
                            <span>Feb 02, 2018</span>
                            <h3>Over the canion</h3>
                        </div> {/*-- .main__images__image end --*/}
                        <div className={`${styles.images__row3__image} ${styles.images__image}`}>
                            <img src={mainImage6} alt="Mountains"/>
                            <span>Feb 02, 2018</span>
                            <h3>Mirror lake</h3>
                        </div> {/*-- .main__images__image end --*/}
                        <div className={`${styles.images__row3__image} ${styles.images__image}`}>
                            <img src={mainImage7} alt="Mountains"/>
                            <span>Feb 02, 2018</span>
                            <h3>Chicago theater</h3>
                        </div> {/*-- .main__images__image end --*/}
                    </div> {/*-- .main__images__row3 end --*/}
                </div> {/*-- .main__images end --*/}
            </div>  {/*-- .main__container end --*/}
        </main>
    );
};

export default Main;