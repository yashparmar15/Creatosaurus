import React from 'react';

import styles from './Card2.module.css';

import image2 from '../../../assets/images/image2.png';

import image3 from '../../../assets/images/image3.png';

import image4 from '../../../assets/images/image4.png';

import image5 from '../../../assets/images/image5.png';

import image6 from '../../../assets/images/image6.png';

const card2 = (props) => (
    <div className = {styles.Card2}>
        <h1 className = {styles.heading}>All the tools you need for Marketing</h1>
        <div className = {styles.MainImage}>
            <img className = {styles.mainimage} src = {image2} alt = "selfie" />
        </div>
        <div className = {styles.imageContainer}>
            <img src = {image3} alt = "selfie" className = {styles.image3}/>
            <img src = {image4} alt = "selfie" className = {styles.image4}/>
            <img src = {image5} alt = "selfie" className = {styles.image5}/>
            <img src = {image6} alt = "selfie" className = {styles.image6}/>
        </div>
    </div>
);

export default card2;