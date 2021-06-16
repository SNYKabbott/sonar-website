import React, { Component } from 'react';
import styles from './Navigation.module.scss';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.navigationList = React.createRef();
    }

    componentDidMount() {
        this.navigationList.current.addEventListener('click', (event) => {
            for(let i = 0; i < this.navigationList.current.children.length; i++) {
                this.navigationList.current.children[i].classList.remove(`${styles.activeLink}`);
            }
            if(event.target.tagName === "LI") {
                event.target.classList.add(`${styles.activeLink}`);
            }
        });
    }

    render() {
        return (
            <ul className={styles.navigationList} ref={this.navigationList}>
                <li className={`${styles.navigationList__item} ${styles.activeLink}`}>
                    All
                </li>
                <li className={styles.navigationList__item}>
                    Landscapes
                </li>
                <li className={styles.navigationList__item}>
                    Portraits
                </li>
                <li className={styles.navigationList__item}>
                    Fashion
                </li>
                <li className={styles.navigationList__item}>
                    Studio
                </li>
            </ul>
        );
    }
};

export default Navigation;