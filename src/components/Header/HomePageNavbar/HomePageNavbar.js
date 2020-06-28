import React from 'react';

import styles from './HomePageNavbar.module.css';

import clock from '../../../assets/images/clock.svg';

import image3 from '../../../assets/images/image3.png';

const homePageNavbar = (props) => (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3 navbar-fixed-top " style = {{backgroundColor : '#1D3557'}}>
            <div className="container">
                <a className="navbar-brand js-scroll-trigger" href="" ><img className="img-fluid1 img-fluid" src={clock} width="30" height="30"  alt="Creatosaurus" /></a>
                <a className="navbar-brand js-scroll-trigger" href="" style = {{fontWeight : 'bolder' , color : '#fff' , fontSize : '23px' , letterSpacing : '1px'}}>CREATOSAURUS</a>
                <button className="navbar-toggler navbar-toggler-right" style={{backgroundColor : 'aliceblue'}} type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" style={{color : 'aliceblue'}}></span></button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto my-2 my-lg-0">
                        <li className="nav-item" style = {{fontSize : '16px'}}><a className="nav-link js-scroll-trigger" href="" style = {{color : '#fff' , fontWeight : 'bold' , marginRight : '30px'}}>Home</a></li>
                        <li className="nav-item" style = {{fontSize : '16px'}}><a className="nav-link js-scroll-trigger" href="" style = {{color : '#fff' , fontWeight : 'bold' , marginRight : '30px'}}>Messages</a></li>
                        <li className="nav-item" style = {{fontSize : '16px'}}><a className="nav-link js-scroll-trigger" href="" style = {{color : '#fff' , fontWeight : 'bold' , marginRight : '30px'}}>Notifications</a></li>
                        <img className = {styles.profilepic} src = {image3} alt = "profile pic" />
                    </ul>
                </div>
            </div>
            {/* <Switch> 
              <Route exact path=''> <HomePage /></Route> 
              <Route exact path='profile'><ProfilePage /></Route> 
            </Switch>  */}
     </nav>
);

export default homePageNavbar;