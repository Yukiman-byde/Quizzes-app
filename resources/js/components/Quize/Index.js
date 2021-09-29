import React from 'react';
import ReactDOM from 'react-dom';
import Quize from './Quize';


if(document.getElementById('quize')){
    ReactDOM.render(
        <Quize />,
        document.getElementById('quize'),
        );
}