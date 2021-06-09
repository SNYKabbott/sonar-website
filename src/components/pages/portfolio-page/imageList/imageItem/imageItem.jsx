import React from 'react';
import styles from './imageItem.module.scss';

const imageItem = (props) => {
    return (
        <div className={styles.imageItem}>
            <img src={props.imageSrc} alt="Snowy Moutains"/>
            <h5>{props.title}</h5>
            <span>{props.span}</span>
        </div>
    );
};

export default imageItem;