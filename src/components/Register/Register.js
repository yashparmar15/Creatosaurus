import React from 'react';

import styles from './Register.module.css';

import clock from '../../assets/images/clock.svg';

const register = (props) => (
    <div className = {styles.register}>
        <div className = {styles.image}>

        </div>
        <div className = {styles.form}>
            <div className = {styles.logo}>
                <img src = {clock} alt = "clock"  className = {styles.logoicon}/>
            </div>
            <div className = {styles.registerform}>
                <h1 className = {styles.heading}>Sign Up</h1>
                <h3 className = {styles.subheading}>Creatosaurus is now free for all enterprises and organization. Enjoy efficiency and growth with Creatosaurus</h3>
                <form>
                    <label className = {styles.label} >E-mail Id</label>
                    <input type = "email" className = {styles.field} placeholder= "jane123@doe.com" />
                    <label className = {styles.label} style = {{marginTop : '1vw'}}>Password</label>
                    <input type = "password" className = {styles.field} placeholder= "atleast 8 characters" />
                    <label className = {styles.label} style = {{marginTop : '1vw'}}>Confirm Password</label>
                    <input type = "password" className = {styles.field} placeholder= "atleast 8 characters" />
                    <div className = {styles.passcheck}>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className = {styles.check}>
                        <input type = "checkbox"  value = "Keep me logged in"/> I have read and accept the <b>Customer Terms and Services, User Terms</b> and <b>Services and Privacy Policy</b>
                    </div>
                    <button type = "submit" className = {styles.button} >Next</button>
                </form>
                <p className={styles.dont}>Already have an account? <b>Log In</b></p>
            </div>
        </div>
    </div>
);

export default register;