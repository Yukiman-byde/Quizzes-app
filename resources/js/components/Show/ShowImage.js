import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    layout: {
        display: 'flex',
    },
    pic: {
       width: '600px',
       height: '350px',
       marginRight: '30px',
       borderRadius: '10px',
    },
})

export default function ShowImage( { src, title }){
    const classes = useStyles();
    return(
        <div className={classes.layout}>
          <img className={classes.pic} src={src.thumbnail} />
        </div>
        );
}