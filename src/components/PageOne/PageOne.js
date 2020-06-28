import React from 'react';

import Card1 from './Card1/Card1';

import Card2 from './Card2/Card2';

import Card3 from './Card3/Card3';

import Card4 from './Card4/Card4';

import Card5 from './Card5/Card5';

import Card6 from './Card6/Card6';

import Card7 from './Card7/Card7';

import Footer from '../Footer/Footer';

import styles from './PageOne.module.css';

const pageOne = (props) => (
    <div className = {styles.Main}>
        <Card1 />
        <Card2 />
        <Card3 />
        <Card4 />
        <Card5 />
        <Card6 />
        <Card7 />
        <Footer />
    </div>
);

export default pageOne;