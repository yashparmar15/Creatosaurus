import React from 'react';

import styles from './Profile.module.css';

import setting from '../../assets/images/settings.svg';

import logout from '../../assets/images/logout.svg';

import tag from '../../assets/images/tag.svg';

import computer from '../../assets/images/computer-screen.svg';

const profile = (props) => (
    <div className = {styles.main}>
        <div className = {styles.container1}>
            <button className = {styles.normal} ><img src = {setting} alt = "settings" />Overview</button>
            <button className = {styles.clicked} ><img src = {computer} alt = "settings" />Apps</button>
            <button className = {styles.normal} ><img src = {tag} alt = "settings" />Plan & Pricing</button>
            <button className = {styles.normal} ><img src = {setting} alt = "settings" />Payment</button>
            <div className = {styles.setlog}>
                <button className = {styles.normal} ><img src = {setting} alt = "settings" />Settings</button>
                <button className = {styles.normal} ><img src = {logout} alt = "settings" />Logout</button>
            </div>
        </div>
        <div className = {styles.container2}>
        </div>
    </div>
);

export default profile;