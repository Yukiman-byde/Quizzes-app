import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
  tips: {
      textAlign: 'center',
      padding: '16px',
      color: '#555',
      letterSpacing: '1.3px',
  }
}));

export default function Tip(){
    const [tips, setTips] = useState([]);
 
    let num = window.location.pathname;
    let nombre = num.match(/\d+/);
   // console.log(trans.split('\u3002'));

    useEffect(() => {
        axios.get('/transcription/json/' + nombre).then(res=>{
            let url =(res.data.tip);
            let uri = url.replace('.','　');
            setTips(uri);
        });
    },[]);
    const classes = useStyles();
    return (
       <div className={classes.root}>
         <Paper 
         className={classes.tips}
         elevation={2}
         component='div'>
         <h1>Vocabulary</h1>
         <h5>{tips}</h5>
         </Paper>
       </div> 
        );
}