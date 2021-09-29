import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header'

if(document.getElementById('header')){
    ReactDOM.render(
        <Header />,
        document.getElementById('header'),
        )
}
