import React from 'react';
import styles from './services.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const services = () => {
    return (
        <div className={styles.services}>
            <ul className={styles.services__list}>
                <li className={styles.services__listItem}>
                    <img src="data:image/webp;base64,UklGRggDAABXRUJQVlA4TPsCAAAvKAAIEG+moG0bJlzGn2TPNggzMiMK0jZgYbujyG3bBj5ltGW/AcyCGYirLdA4B7NGHJkCA/EDsHCErSJLQOA27n45Y89+i7abLsDB3Q37D4R5ZdeAkCBJtmlb9W3btm3btm3b/9nmt23bRo3qvHvuG0JE/yeA8GcMf6MyUTbdmZR2ck0FYJdFcQkJCQnxsadjYuNyjItmpsFm0NsMwm93dBSjbMYmgW83CTYcuy375uXktX05Z7VwW9w556pbVl02Y87ihSsuqP75r/6+5eXFq1evXr121Tgon2fUp/sSrDD+smEvV49xccd2tapUatihfdt6e3UR0H3Wxg3TWkKNvTqvVvsO7TrOtMDbQM0dGwAme70RzZONuAX6/bY1wUJNhHbq89rMNRsOaPL0nlTvMTRX59P4rb0D+zQT9ksbO9XzBuUeGN8M2DaDutS5bgw1tSxwooQpbom10Q2r8dQpBF/sGeH7/qw3hj4mhWCX9h/hRDIdS8Sac3+4i7Uu45gdQ9CyKT/eMcithC233d2ctWIZz4WBQU7kg0S5095lPcwFK4c6JQ3cEA3vf5AtvRwe6tNvVtkkqim2aGU73B2mrEVckqiruAFX4kWORqrqQT6/iA7v4lE+vORQpOru59vDUsjfjSd5/ZqDml1CeVN48KsUoImb+XuHI5rK2unA39ccsmpp9HUoxnJck3gZDxRLNyeUxkFp6ExOaBYDuwGzbIsPSsN77LFpIB6LgRqeYb3DottvW/xEIAYvAcTZlK//6kcz0AImOb2EWCwM1PAh7fzYIFxfv1Let0QqDrDadYzRkWEW+rMJZ+1a0jHUHIBM59Dln1fG1Qw0mfPZq5U46lqAg5rDgpybewOcdzlsV99fu/ld/8yGOHcQjPGx7Qh5woImMOTU839/7u7oCv0fuYRgC7900XfPnr9+G7x3T43vSMTBV9XLz96+ffNBB9A65umrlxHvFxbcUO+c3Loj8aV6rqD4ycuXL189S+pMKTZZet7gt/Sp1QgNAA==" alt="Camera"/>
                    <h5>Wedding Photography</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel tortor facilisis, volutpat nulla placerat, tincidunt mi. Nullam vel orci dui.</p>
                </li>
                <li className={styles.services__listItem}>
                    <img src="https://preview.colorlib.com/theme/sonar/img/core-img/vector.png.webp" alt="Painting"/>
                    <h5>Studio Photograpy</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel tortor facilisis, volutpat nulla placerat, tincidunt mi. Nullam vel orci dui.</p>
                </li>
                <li className={styles.services__listItem}>
                    <img src="https://preview.colorlib.com/theme/sonar/img/core-img/pantone.png.webp" alt="Ladder"/>
                    <h5>Fashion Photography</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel tortor facilisis, volutpat nulla placerat, tincidunt mi. Nullam vel orci dui.</p>
                </li>
                <li className={styles.services__listItem}>
                    <img src="https://preview.colorlib.com/theme/sonar/img/core-img/video-player.png.webp" alt="Play Button"/>
                    <h5>Profesional Videos</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel tortor facilisis, volutpat nulla placerat, tincidunt mi. Nullam vel orci dui.</p>
                </li>
                <li className={styles.services__listItem}>
                    <img src="https://preview.colorlib.com/theme/sonar/img/core-img/browsing.png.webp" alt="Earth and Hourglass"/>
                    <h5>Landscapes</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel tortor facilisis, volutpat nulla placerat, tincidunt mi. Nullam vel orci dui.</p>
                </li>
                <li className={styles.services__listItem}>
                    <img src="https://preview.colorlib.com/theme/sonar/img/core-img/develop.png.webp" alt="Head and Gear"/>
                    <h5>Photo Journalism</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel tortor facilisis, volutpat nulla placerat, tincidunt mi. Nullam vel orci dui.</p>
                </li>
            </ul>
        </div>
    );
};

export default services;