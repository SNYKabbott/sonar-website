import React from 'react';
import styles from './ImageItem.module.scss';

const ImageItem = (props) => {
    return (
        <div className={styles.imageItem}>
            <img src={props.imageSrc} alt="Snowy Moutains"/>
            <h5>{props.title}</h5>
            <span>{props.span}</span>
        </div>
    );
};

export default ImageItem;