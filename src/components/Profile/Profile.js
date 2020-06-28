import React, { Component } from 'react';

import styles from './Profile.module.css';

import setting from '../../assets/images/settings.svg';

import logout from '../../assets/images/logout.svg';

import tag from '../../assets/images/tag.svg';

import image3 from '../../assets/images/image3.png';

import image4 from '../../assets/images/image4.png';

import image5 from '../../assets/images/image5.png';

import image6 from '../../assets/images/image6.png';

import next from '../../assets/images/next.svg';

import computer from '../../assets/images/computer-screen.svg';

class Profile extends Component {
    state = {
        isHide : false,
        flag : false,
        count : 0
    }
    TogglePerson = () => {
        const flag = this.state.isHide;
        this.state.flag = true;
        this.setState({isHide : !flag});
        const n = this.state.count + 1;
        this.setState({count : n});
        this.setState({flag : true})
    }
    render(){
        let conClass = null;
        let r;
        const flag = this.state.count;
        if(this.state.flag){
            if(this.state.count % 2 === 1){
                r = "none";
                conClass = "block";
            }
            else{
                conClass = "none";
                r = "block";
            }
        }
        else{
            if(window.innerWidth <= 699){
                r = "block";
                conClass = "none";
            } else{
            conClass = "block";
            r = "block";
            }
        }
        return(
            <div>
            <button type = "button" className = {styles.menu} onClick = {this.TogglePerson}>Menu</button>
            <div className = {styles.main}>
            
        <div className = {styles.container1} style = {{display : conClass}}>
            <button className = {styles.normal} ><img src = {setting} alt = "settings" />Overview</button>
            <button className = {styles.clicked} ><img src = {computer} alt = "settings" />Apps</button>
            <button className = {styles.normal} ><img src = {tag} alt = "settings" />Plan & Pricing</button>
            <button className = {styles.normal} ><img src = {setting} alt = "settings" />Payment</button>
            <div className = {styles.setlog}>
                <button className = {styles.normal} ><img src = {setting} alt = "settings" />Settings</button>
                <button className = {styles.normal} ><img src = {logout} alt = "settings" />Logout</button>
            </div>
        </div>
        <div className = {styles.mainContainer} style = {{display : r}}>
            <div className = {styles.container2}>
                <div className = {styles.card}>
                    <img src = {image3} alt = "image"  className = {styles.image}/>
                    <h1 className = {styles.subheading}>Local Story</h1>
                    <p className  ={styles.subpara}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</p>
                    <p className = {styles.visit}>Visit Website <img src = {next} alt = "next"/></p>
                </div>
                <div className = {styles.card}>
                    <img src = {image4} alt = "image"  className = {styles.image}/>
                    <h1 className = {styles.subheading}>Muse</h1>
                    <p className  ={styles.subpara}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</p>
                    <p className = {styles.visit}>Visit Website <img src = {next} alt = "next"/></p>
                </div>
                <div className = {styles.card}>
                    <img src = {image5} alt = "image"  className = {styles.image}/>
                    <h1 className = {styles.subheading}>Cashe</h1>
                    <p className  ={styles.subpara}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</p>
                    <p className = {styles.visit}>Visit Website <img src = {next} alt = "next"/></p>
                </div>
                <div className = {styles.card}>
                    <img src = {image6} alt = "image"  className = {styles.image}/>
                    <h1 className = {styles.subheading}>Pixler</h1>
                    <p className  ={styles.subpara}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</p>
                    <p className = {styles.visit}>Visit Website <img src = {next} alt = "next"/></p>
                </div>
            </div>
            <div className = {styles.container2}>
                <div className = {styles.card}>
                    <img src = {image3} alt = "image"  className = {styles.image}/>
                    <h1 className = {styles.subheading}>Captionator</h1>
                    <p className  ={styles.subpara}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</p>
                    <p className = {styles.visit}>Visit Website <img src = {next} alt = "next"/></p>
                </div>
                <div className = {styles.card}>
                    <img src = {image4} alt = "image"  className = {styles.image}/>
                    <h1 className = {styles.subheading}>Twester</h1>
                    <p className  ={styles.subpara}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</p>
                    <p className = {styles.visit}>Visit Website <img src = {next} alt = "next"/></p>
                </div>
                <div className = {styles.card}>
                    <img src = {image5} alt = "image"  className = {styles.image}/>
                    <h1 className = {styles.subheading}>Social Pass</h1>
                    <p className  ={styles.subpara}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</p>
                    <p className = {styles.visit}>Visit Website <img src = {next} alt = "next"/></p>
                </div>
                <div className = {styles.card}>
                    <img src = {image6} alt = "image"  className = {styles.image}/>
                    <h1 className = {styles.subheading}>Simple Ads</h1>
                    <p className  ={styles.subpara}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</p>
                    <p className = {styles.visit}>Visit Website <img src = {next} alt = "next"/></p>
                </div>
            </div>
        </div>
            </div>
            </div>
        );
    }
    
};

export default Profile;