import React from 'react';

import styles from '../Card1/Card1.module.css';

import image1 from '../../../assets/images/image1.svg'

const card7 = (props) => (
    <div className = {styles.Card1} style = {{backgroundColor : '#fff' , paddingTop : '10vw '}}>
        <div className = {styles.part1}>
            <h1 className = {styles.heading}>Start Growing With Creatosaurus Today</h1>
            <p className = {styles.desc}>With tools to make every part of your process more human and a support team excited to help you, getting started with inbound has never been easier.</p>
            <button className = {styles.Button}>Get Started, it's Free!</button>
        </div>
        <div className = {styles.part2}>
            <img  src = {image1}className = {styles.image} />
        </div>
    </div>
);

export default card7;