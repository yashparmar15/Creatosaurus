import React from 'react';

import styles from './OTP.module.css';

import clock from '../../assets/images/clock.svg';

const otp = (props) => (
    <div className = {styles.otp}>
        <div className = {styles.image}>

        </div>
        <div className = {styles.form}>
            <div className = {styles.logo}>
                <img src = {clock} alt = "clock"  className = {styles.logoicon}/>
            </div>
            <div className = {styles.otpform}>
                <h1 className = {styles.heading}>Check your E-mail</h1>
                <h3 className = {styles.subheading}>A 6-digit code has been sent to abc.xyz.com Enter it within 10 mins</h3>
                <form>
                    <div className = {styles.passcheck}>
                            <input type = "text"  className = {styles.block} placeholder = "0"/>
                            <input type = "text"  className = {styles.block} placeholder = "0"/>
                            <input type = "text"  className = {styles.block} placeholder = "0"/>
                            <input type = "text"  className = {styles.block} placeholder = "0"/>
                            <input type = "text"  className = {styles.block} placeholder = "0"/>
                            <input type = "text"  className = {styles.block} placeholder = "0"/>
                    </div>
                    <div className = {styles.check}>
                       Resend the code
                    </div>
                    <button type = "submit" className = {styles.button} >Next</button>
                </form>
            </div>
        </div>
    </div>
);

export default otp;