import React from 'react';

import styles from './Login.module.css';

import clock from '../../assets/images/clock.svg';

const login = (props) => (
    <div className = {styles.Login}>
        <div className = {styles.form}>
            <div className = {styles.logo}>
                <img src = {clock} alt = "clock"  className = {styles.logoicon}/>
            </div>
            <div className = {styles.loginform}>
                <h1 className = {styles.heading}>Log In</h1>
                <h3 className = {styles.subheading}>Log in with your data you entered during your registration.</h3>
                <form>
                    <label className = {styles.label} >E-mail Id</label>
                    <input type = "email" className = {styles.field} placeholder= "jane123@doe.com" />
                    <label className = {styles.label} style = {{marginTop : '1vw'}}>Password</label>
                    <input type = "password" className = {styles.field} placeholder= "atleast 8 characters" />
                    <div className = {styles.check}>
                        <input type = "checkbox"  value = "Keep me logged in"/> Keep me logged in 
                    </div>
                    <button type = "submit" className = {styles.button} >Log In</button>
                </form>
                <p className={styles.dont}>Don't have an account? <b>Sign up</b> <br/> <b>Forgot Password?</b></p>
            </div>
        </div>
        <div className = {styles.image}>

        </div>
    </div>
);

export default login;