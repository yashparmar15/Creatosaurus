import React from 'react';

import styles from './Footer.module.css';

import facebook from '../../assets/images/facebook.svg';

import twitter from '../../assets/images/twitter.svg';

import instagram from '../../assets/images/instagram.svg';

import youtube from '../../assets/images/youtube.svg';

import linkedin from '../../assets/images/linkedin.svg';

import heart from '../../assets/images/heart.svg';

const footer = (props) => (
    <div className={styles.Main}>
        <div className={styles.footer}>
            <div className={styles.contain}>
                <div className={styles.col}>
                    <h1>Product</h1>
                    <ul>
                    <li>Overwiew</li>
                    <li>Pricing</li>
                    </ul>
                </div>
                <div className={styles.col}>
                    <h1>Solution</h1>
                    <ul>
                    <li>Social Media Marketing</li>
                    <li>Influncer Media Influencer</li>
                    <li>Content Media Marketing</li>
                    </ul>
                </div>
                <div className={styles.col}>
                    <h1>Partnership</h1>
                    <ul>
                    <li>Enterprise Business</li>
                    <li>Charities <span>&</span> NGO's</li>
                    <li>Affilators</li>
                    </ul>
                </div>
                <div className={styles.col}>
                    <h1>Support</h1>
                    <ul>
                    <li>Getting Started</li>
                    <li>FAQs</li>
                    <li>Help</li>
                    </ul>
                </div>
                <div className={styles.col}>
                    <h1>Company</h1>
                    <ul>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Careers</li>
                    <li>Contact Us</li>
                    </ul>
                </div>
                <div className={styles.col}>
                    <h1>Legal</h1>
                    <ul>
                    <li>Terms <span>&</span> Services</li>
                    <li>Privacy Policy</li>
                    <li>Cookie Policy</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className = {styles.break}></div>
        <div className = {styles.division}>
            <div className = {styles.social}>
                <img className = {styles.media} src = {instagram} alt = "instagram" />
                <img className = {styles.media} src = {linkedin} alt = "linkedin" />
                <img className = {styles.media} src = {facebook} alt = "facebook" />
                <img className = {styles.media} src = {twitter} alt = "twitter" />
                <img  className = {styles.media} src = {youtube} alt = "youtube" />
            </div>
            <div className = {styles.copyright}>
            © Creatosaurus 2020
            </div>
            <div className={styles.made}>
                Made with <img src = {heart} alt = "heart"/> in <b>India</b>
            </div>
        </div>
    </div>
    
);

export default footer;