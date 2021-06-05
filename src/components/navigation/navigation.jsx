import React, { Component } from 'react';
import styles from './navigation.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faPinterest,
    faLinkedin,
    faInstagram,
    faFacebook,
    faTwitter
} from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

class navigation extends Component {
    constructor(props) {
        super(props);
        this.mainNavigation = React.createRef();
        this.navigation = React.createRef();
    }

    componentDidMount() {
        window.onscroll = () => {
            if(window.scrollY > 75) {
                this.navigation.current.classList.add(styles.activeNav);
            } else {
                this.navigation.current.classList.remove(styles.activeNav);
            }
        };
    }

    onMenuButtonClick = () => {
        this.mainNavigation.current.classList.add(styles.active);
    }

    onExitButtonClick = () => {
        this.mainNavigation.current.classList.remove(styles.active);
    }

    render() {
        return (
            <nav className={styles.navigation} ref={this.navigation}>
                <a href="placeholder" className={styles.logo}>Sonar</a>
                <div className={styles.container}>
                    <ul className={styles.navigation__socialList}>
                        <li className={styles.navigation__socialListItem}>
                            <a href="placeholder">
                                <FontAwesomeIcon icon={faPinterest}/>
                            </a>
                        </li>
                        <li className={styles.navigation__socialListItem}>
                            <a href="placeholder">
                                <FontAwesomeIcon icon={faLinkedin}/>
                            </a>
                        </li>
                        <li className={styles.navigation__socialListItem}>
                            <a href="placeholder">
                                <FontAwesomeIcon icon={faInstagram}/>
                            </a>
                        </li>
                        <li className={styles.navigation__socialListItem}>
                            <a href="placeholder">
                                <FontAwesomeIcon icon={faFacebook}/>
                            </a>
                        </li>
                        <li className={styles.navigation__socialListItem}>
                            <a href="placeholder">
                                <FontAwesomeIcon icon={faTwitter}/>
                            </a>
                        </li>
                    </ul>
                    <span className={styles.menuButton} onClick={this.onMenuButtonClick}>
                        <FontAwesomeIcon icon={faBars}/>
                    </span>
                </div> { /*-- .container end --*/ }
                <div className={styles.mainNavigation} ref={this.mainNavigation}>
                    <h3>Sonar</h3>
                    <ul className={styles.mainNavigation__list}>
                        <li className={styles.mainNavigation__listItem}>
                            <a href="placeholder">Home</a>
                            <div className={styles.line}></div>
                        </li>
                        <li className={styles.mainNavigation__listItem}>
                            <a href="placeholder">About Me</a>
                            <div className={styles.line}></div>
                        </li>
                        <li className={styles.mainNavigation__listItem}>
                            <a href="placeholder">Services</a>
                            <div className={styles.line}></div>
                        </li>
                        <li className={styles.mainNavigation__listItem}>
                            <a href="placeholder">Portfolio</a>
                            <div className={styles.line}></div>
                        </li>
                        <li className={styles.mainNavigation__listItem}>
                            <a href="placeholder">Contant</a>
                            <div className={styles.line}></div>
                        </li>
                    </ul>
                    <FontAwesomeIcon 
                        icon={faTimes} 
                        className={styles.closeIcon}
                        onClick={this.onExitButtonClick}
                    />
                </div> { /*-- .mainNavigation end --*/ }
            </nav>
        );
    }
};

export default navigation;