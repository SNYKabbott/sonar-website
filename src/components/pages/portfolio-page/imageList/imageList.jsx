import React from 'react';
import styles from './imageList.module.scss';

const imageList = () => {
    return (
        <div className={styles.imageList}>
            <div className={styles.imageList__item}>
                <img src="placeholder" alt="New York"/>
                <h5>Mountains in the mist</h5>
                <span>Landscapes</span>
            </div> {/*-- .imageList__item end --*/}
        </div>
    );
};

export default imageList;