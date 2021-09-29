import React from 'react';
import ReactDOM from 'react-dom';
import Display from './Display'


if(document.getElementById('display')){
    ReactDOM.render(
        <Display />,
        document.getElementById('display'),
        );
}