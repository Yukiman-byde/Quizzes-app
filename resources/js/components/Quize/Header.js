import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  active: {
     borderBottom: '1px solid #4689FF',
     position: 'fixed',
     width: '100%',
     height: 100,
  },
}));


export default function Header({nextStep, activeStep}) {
  const classes = useStyles();
  const [question, setQuestion] = useState([]);
            
  let num = window.location.pathname;
  let nombre = num.match(/\d+/);
  
  useEffect(() =>{
      axios.get('/question/quize/json/' + nombre).then(res =>{
          setQuestion(res.data);
      });
  }, []);
  
    return(
      <div className={classes.root}>
           <Stepper activeStep={activeStep} className={classes.active}>
            {
               question.map((i)=>{
                 return(
                   <Step key={i.id}>
                     <StepLabel>問目</StepLabel>
                   </Step>
                 );
               })
            }
          </Stepper>
      </div>
      );
}

