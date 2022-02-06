import React from 'react';

import './App.css'
import {Comments, Posts, Users} from './components';


const App = () => {
    return (
        <div className={'Wrap'}>
            <Users/>
            <Posts/>
            <Comments/>
        </div>
    );
};

export default App;