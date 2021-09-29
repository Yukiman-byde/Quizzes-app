import React from 'react';
import Display_display from './Display_display.js';
import Learn from './Learn';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
　　back: {
　　  background: 'white',
　　  padding: '50px 20px',
　　},
　　char: {
　　    marginBottom: '50px',
　　    textShadow: '0 0 20px pink,0 0 20px pink',
　　    color: 'red',
　　},

});


export default function Display(){
    const classes = useStyles();
    
    return(
        <div>
           <div className={classes.back}>
              <div className="animation__back">
                <Typography 
                      className={classes.char}
                      variant="h2"
                      align="center"
                     >
                  Access To Real Japan
                </Typography>
               </div>
           </div>
           <div >
              <Display_display/>
           </div>
           <div>
             <Learn />
           </div>
        </div>
        );
}






    


 