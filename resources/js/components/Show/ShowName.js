import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    title: {
        margin: '30px',
        textAlign: 'center',
    },

})


export default function ShowName({ title}){
    const classes = useStyles();
    return(
        <div className={classes.title}>
            <h1>~ {title.name} ~</h1>
            <h5>{title.description}</h5>
        </div>
        );
}