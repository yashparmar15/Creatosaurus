import React from 'react';

import styles from './Card6.module.css';

const card6 = (props) => (
    <div className = {styles.Card6}>
        <h1 className = {styles.heading}>Subscribe to Newsletter</h1>
        <h1 className = {styles.subheading}>Lorem ipsum dolor sit amet</h1>
        <input type = "email" className = {styles.email} placeholder = "Enter Email Id"/>
    </div>
);

export default card6;