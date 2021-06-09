import React from 'react';
import styles from './imageList.module.scss';

import ImageItem from './imageItem/imageItem';
import Navigation from './navigation/navigation';

const imageList = () => {
    return (
        <div className={styles.container}>
            <Navigation />
            <div className={styles.imageList}>
                <ImageItem 
                    imageSrc="https://preview.colorlib.com/theme/sonar/img/portfolio-img/x1.jpg.pagespeed.ic.8ZkXLqemOB.webp"
                    title="Mountains in the mist"
                    span="Landscapes"
                />
                <ImageItem 
                    imageSrc="https://preview.colorlib.com/theme/sonar/img/portfolio-img/x2.jpg.pagespeed.ic.aIxr_CPriO.webp"
                    title="A beautiful encounter"
                    span="Portrait"
                />
                <ImageItem 
                    imageSrc="https://preview.colorlib.com/theme/sonar/img/portfolio-img/x3.jpg.pagespeed.ic.C-9NpO-R8i.webp"
                    title="New York city"
                    span="Landscapes"
                />
                <ImageItem 
                    imageSrc="https://preview.colorlib.com/theme/sonar/img/portfolio-img/x4.jpg.pagespeed.ic.pAcOSYqRFW.webp"
                    title="Girl laying in hay"
                    span="Portrait"
                />
            </div> {/*-- .imageList end --*/}
        </div>
    );
};

export default imageList;