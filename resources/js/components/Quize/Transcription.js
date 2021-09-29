import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '80%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  trans: {
      letterSpacing: '1.4px',
      lineHeight: '2em',
  },
}));

export default function Transcription(){
    const classes = useStyles();
    const [trans, setTrans] = useState([]);
 
    let num = window.location.pathname;
    let nombre = num.match(/\d+/);
   // console.log(trans.split('\u3002'));

    useEffect(() => {
        axios.get('/transcription/json/' + nombre).then(res=>{
            let url =(res.data.transcription);
            let uri = url.replace('\u3002','。　　');
            setTrans(uri);
        });
    },[]);
    
    
    return(
        <div className={classes.root}>
            <Accordion>
               <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header">
                    <Typography className={classes.heading}>Transcription</Typography>
               </AccordionSummary>
               <AccordionDetails>
                    <Typography 
                    className={classes.trans}
                    >
                     {trans}
                    </Typography>
               </AccordionDetails>
            </Accordion>
        </div>
        );
}