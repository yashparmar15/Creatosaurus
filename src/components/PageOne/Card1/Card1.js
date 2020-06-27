import React from 'react';

import styles from './Card1.module.css';

import image1 from '../../../assets/images/image1.svg'

const card1 = (props) => (
    <div className = {styles.Card1}>
        <div className = {styles.part1}>
            <h1 className = {styles.heading}>AI based end-to-end Marketing Automation tool</h1>
            <p className = {styles.desc}>Marketing, sales and service software that helps your business grow without compromise. Because "good for business" should also mean "good for the customer.</p>
            <button className = {styles.Button}>Get Started, it's Free!</button>
        </div>
        <div className = {styles.part2}>
            <img  src = {image1}className = {styles.image} />
        </div>
    </div>
);

export default card1;