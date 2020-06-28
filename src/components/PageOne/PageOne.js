import React from 'react';

import Card1 from './Card1/Card1';

import Card2 from './Card2/Card2';

import Card3 from './Card3/Card3';

import Card4 from './Card4/Card4';

import styles from './PageOne.module.css';

const pageOne = (props) => (
    <div className = {styles.Main}>
        <Card1 />
        <Card2 />
        <Card3 />
        <Card4 />
    </div>
);

export default pageOne;