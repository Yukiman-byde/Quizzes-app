import React, { useState, useEffect } from 'react';
import ShowComponent from './ShowComponent';
import ShowName from './ShowName';
import ShowImage from './ShowImage';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';

//cssスタイル（全体）
const useStyles = makeStyles({
    centre: {
        marginRight: 'auto',
        marginLeft: 'auto',
        alignItems: 'center',
        padding: '0 20px',
        display: 'flex',
        flexDirection: 'column',
    },
})


export default function Show(){
    const classes = useStyles();
    
    const [data, setData] = useState([]);
    const [category, setCategory] = useState([]);
   
    const url = `/category/${category.sub_name}`;
    
    let uri = window.location.pathname;
    let char = uri.split('/');
    const third = char.splice(2, 1);

    
    let num =  window.location.pathname;
    let nombre = num.match(/\d+/);
    
    useEffect(() => {
        axios.get('/categories/json/' + third).then(res => {
            console.log(res.data);
        });
    },[]);
    
    useEffect(() =>{
        axios.get('/displays/json/' + nombre).then(res => {
           setData(res.data);
        });
    }, []);
    
  return(
      <div className={classes.centre}>
          <ShowName title={data}/>
          <ShowImage className={classes.img} src={data}/>
          <a href={url}>Genre: {category.name}</a>
          <ShowComponent className={classes.button}/>
      </div>
  );
    
}