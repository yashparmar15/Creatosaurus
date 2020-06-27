import React from 'react';

import Navigation from '../../components/Header/Navigation/Navigation';

import PageOne from '../../components/PageOne/PageOne';

const appBuilder = (props) => (
    <div>
        <Navigation />
        <PageOne />
    </div>
);

export default appBuilder;