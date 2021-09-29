import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './Footer';


if(document.getElementById('footer')){
    ReactDOM.render(
        <Footer />,
        document.getElementById('footer'),
        );
}