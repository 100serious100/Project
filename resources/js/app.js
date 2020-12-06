require('./bootstrap');

import React from 'react';
import ReactDOM from 'react-dom'
import Home from './components/Home'

ReactDOM.render(
    <span>дороу<Home /></span>,
    document.querySelector('#root')
);