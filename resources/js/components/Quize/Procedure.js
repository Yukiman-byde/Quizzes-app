import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
     '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(60),
      height: theme.spacing(70),
    },
  },
  procedure: {
      textAlign: 'center',
      padding: '16px',
      color: '#555',
  }
}));

export default function Procedure(){
    const classes = useStyles();
    return (
       <div className={classes.root}>
         <Paper 
         className={classes.procedure}
         elevation={2}
         component='div'>
         <h1>~Procedure~</h1>
         <h5>・Listen to this video and answer questions in the right screen.</h5>
         <br/>
         <h5>・If you can't understand this video's content, we prepared a transcription.</h5>
         <br/>
         <h5>・You can take a look at it and it would be helpful to understand.</h5>
         <br/>
         <h5>・And if you find some words that you don't know, we strongly recommend you to search these word.</h5>
         <br/>
         <h5>・Please listen to Japnese sounds as much as possible for understanding unconsciously</h5>
         </Paper>
       </div> 
        );
}