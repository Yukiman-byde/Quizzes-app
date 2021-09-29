import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      paddingRight: theme.spacing(10),
      paddingLeft: theme.spacing(10),
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
      margin: theme.spacing(10),
    },
  },
  text: {
        borderBottom: '3px solid #D9E5FF',
        marginTop: '50px',
    },
    choice: {
        paddingTop: '160px',
        margin: 0,
    }
}));


export default function LaQuestion({nextStep, activeStep}){
    const classes = useStyles();
    const [value, setValue] = useState();
    const [question, setQuestion] = useState([]);
    const [ token, setToken ]= useState();
    const [answer, setAnswer] = useState();
    const [length, setLength] = useState();
    const [boolean, setBoolean] = useState(false);
    
    
    let num = window.location.pathname;
    let nombre = num.match(/\d+/);
    let number = 0;
    
    let url = `/outcome/${nombre}`;


    useEffect(()=>{
        let csrf = document.head.querySelector('meta[name="csrf-token"]').content;
        setToken(csrf);
    },[]);
    
    useEffect(()=>{
       setValue(event.target.value);
    },[answer]);
    
    useEffect(() =>{
        axios.get('/question/quize/json/' + nombre).then(res =>{
            setQuestion(res.data);
            setLength(res.data.length);
            console.log(res.data);
        });
    }, []);
    
  useEffect(()=>{
    if(length == activeStep){
       setBoolean(true);
    }
  })

    return(
        <div>
             <div className={classes.choice}>
               <h1>Choose a correct answer</h1>
                <form id="send" action={url}>
                  {question.map((i) => {
                   number++;
                    return(
                    <div>
                       <FormControl component="fieldset" key={number}>
                         <FormLabel className={classes.text}><h3>{number}:{i.question}</h3></FormLabel>
                          <RadioGroup aria-label="quize" value={value} onChange={answer} onClick={nextStep}>
                              <FormControlLabel value="1" name={i.question} control={<Radio />} label={i.choice1}/>
                              <FormControlLabel value="2" name={i.question} control={<Radio />} label={i.choice2}/>
                              <FormControlLabel value="3" name={i.question} control={<Radio />} label={i.choice3}/>
                              <input id="putin" type="hidden" value="" />
                              <input type="hidden" name="token" value={token} />
                          </RadioGroup>
                      </FormControl> 
                      <br/>
                     </div>
                        );
                   })}
                </form>
                <div className={classes.root}>
                {boolean && (
                    <Button 
                    type="submit"
                    variant="contained" 
                    color="primary"
                    form="send"
                    sx={{transition: '1s'}}
                    >
                    回答する
                   </Button>
                )}
                </div>
            </div>
        </div> 
        );
}