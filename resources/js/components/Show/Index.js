import React from 'react';
import ReactDOM from 'react-dom';
import Show from './Show';



if(document.getElementById('show')){
    ReactDOM.render(
    <Show />,
    document.getElementById('show'),
    );
}