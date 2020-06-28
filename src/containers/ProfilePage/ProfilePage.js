import React from 'react';

import HomePageNavbar from '../../components/Header/HomePageNavbar/HomePageNavbar';

import Profile from '../../components/Profile/Profile';

const profilePage = (props) => (
    <div>
        <HomePageNavbar />
        <Profile />
    </div>
);

export default profilePage;