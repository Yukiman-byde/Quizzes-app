import React, {useState} from 'react';
import { IconButton } from '@material-ui/core';
import './HeaderItem.css';

export default function HeaderItem({ Icon, onClick, name }){

    return(
        <div className="header__Item">
         <IconButton onClick={onClick}>
             {Icon && <Icon style={{ fontSize: 45, color: 'white' }} className="header__item">{name}</Icon>}
        </IconButton>
        </div>
    );
}