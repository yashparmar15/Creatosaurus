import React from 'react';

import styles from './Card4.module.css';

import image7 from '../../../assets/images/image7.png';

import image8 from '../../../assets/images/image8.png';

import image9 from '../../../assets/images/image9.png';

const card4 = (props) => (
    <div className = {styles.Card4}>
        <h1 className = {styles.heading}>Deep dive into productivity</h1>
        <div className = {styles.division}>
            <div className = {styles.part1}>
                <img className = {styles.pi1} src = {image7} alt = "image7" />
                <h2 className = {styles.subheading}>Lorem ipsum dolor sit amet sit amet</h2>
                <p className = {styles.subpara}>Learn more on blog</p>
            </div>
            <div className = {styles.part2}>
                <img className = {styles.pi2} src = {image8} alt = "image8" />
                <h2 className = {styles.subheading}>Lorem ipsum dolor sit amet sit amet</h2>
                <p className = {styles.subpara}>Learn more on blog</p>
            </div>
            <div className = {styles.part3}>
                <img className = {styles.pi3} src = {image9} alt = "image9" />
                <h2 className = {styles.subheading}>Lorem ipsum dolor sit amet sit amet</h2>
                <p className = {styles.subpara}>Learn more on blog</p>
            </div>
        </div>
    </div>
);

export default card4;