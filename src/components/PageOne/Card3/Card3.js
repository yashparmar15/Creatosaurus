import React from 'react';

import clock from '../../../assets/images/clock.svg';

import styles from './Card3.module.css';

const card3 = (props) => (
    <div className = {styles.Card3}>
        <h1 className = {styles.heading}>Features</h1>
        <div className = {styles.main}>
            <div className = {styles.part1}>
                <div className = {styles.divide}>
                    <h3 className = {styles.p1heading}>Safe <span>&</span> Secure</h3>
                    <img className = {styles.imagep1} src = {clock} alt="clock" />
                </div>
                <p className = {styles.p1para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.</p>
                <div className = {styles.divide}>
                    <h3 className = {styles.p1heading}>Web Based</h3>
                    <img className = {styles.imagep1} src = {clock} alt="clock" />
                </div>
                <p className = {styles.p1para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.</p>
                <div className = {styles.divide}>
                    <h3 className = {styles.p1heading}>Team Collaboration</h3>
                    <img className = {styles.imagep1} src = {clock} alt="clock" />
                </div>
                <p className = {styles.p1para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.</p>
            </div>
            <div className = {styles.part2}>
                <img className = {styles.centerImage} src = {clock} alt = "clock" />
            </div>
            <div className = {styles.part3}>
                <div className = {styles.divide}>
                        <img className = {styles.imagep3} src = {clock} alt="clock" />  
                        <h3 className = {styles.p3heading}>Eligant <span>&</span> Perfect</h3>
                    </div>
                    <p className = {styles.p3para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.</p>
                    <div className = {styles.divide}>
                        <img className = {styles.imagep3} src = {clock} alt="clock" />
                        <h3 className = {styles.p3heading}>Content Management</h3>
                    </div>
                    <p className = {styles.p3para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.</p>
                    <div className = {styles.divide}>
                        <img className = {styles.imagep3} src = {clock} alt="clock" />
                        <h3 className = {styles.p3heading}>Social Network</h3>
                    </div>
                    <p className = {styles.p3para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.</p>
            </div>
        </div>
        
        
    </div>
);

export default card3;