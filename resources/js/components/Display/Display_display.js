import React, {useState} from 'react';
import DisplayAdvance from './DisplayAdvance.js';
import DisplayBasic from './DisplayBasic.js';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles ((theme) => ({
   appBar:{
       background: 'linear-gradient(#00BAD8 0%,#018BF1 99%)',
   },
   rubric: {
     marginLeft: 'auto',
     marginRight: 'auto',
     padding: theme.spacing(2),
   },
}))

export default function Display_display(){
   const [value, setValue] = useState(0);
   const valueChange =(e, val)=>{
      setValue(val);
   }
   const classes = useStyles();
   return(
          <div className={classes.root}>
              <AppBar position="static" className={classes.appBar}>
                  <Tabs value={value} onChange={valueChange} className={classes.rubric}>
                       <Tab style={{fontSize: 20}} label="上級者" />
                       <Tab style={{fontSize: 20}} label="初級者(Basic)" />
                  </Tabs>
              </AppBar>
              <TabPanel value={value} index={0}><DisplayAdvance /></TabPanel>
              <TabPanel value={value} index={1}><DisplayBasic /></TabPanel>
        </div>
      );
}

function TabPanel(props)
{
   const{children, value, index} = props;
   return(<div>
   {
      value === index && (
      <h1>{children}</h1>)
   }
   </div>)
}