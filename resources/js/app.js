import App from "./Application/App";

require('./bootstrap');

import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Application/components/Navbar';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>,
    document.querySelector('#root')
);