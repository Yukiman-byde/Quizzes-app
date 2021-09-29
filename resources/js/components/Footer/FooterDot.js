import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    dot: {
        marginTop: '20px',
    }
});

export default function FooterDot({ title, Icon }){
    const classes = useStyles();
    return(
        <div className={classes.dot}>
            <Icon style={{ fontSize: 35 }} />
            <h6>{title}</h6>
        </div>
        );
}