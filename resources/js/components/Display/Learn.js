import React, { useEffect, useState } from 'react';
import './image/study.png';
import './Learn.css';
import NoteCard from './NoteCard';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles({
    centre: {
        textAlign: 'center',
        textShadow: '0 0 10px #fefefe,0 0 15px #fefefe',
        background: 'linear-gradient(90deg, rgba(9,9,121,0.665703781512605) 7%, rgba(2,247,226,0.7917542016806722) 79%, rgba(0,212,255,0.8365721288515406) 100%)',
        padding: '100px',
    },
});


export default function Learn(){
    const [data, setData] = useState([]);
    let counter = 0;
    useEffect(()=>{
        axios.get('/categories/json')
        .then(res=> {
            setData(res.data);
        });
    }, []);
    
    const classes = useStyles();
    return(
        <div>
            <div className="back">
                <Typography 
                variant="h1"
                className={classes.centre}
                >
                     Learn Japanese
                </Typography>
            </div>
            <Container>
                 <Grid container>
                   {data.map((i)=>{
                   counter++;
                   if(counter < 7){
                        let url = `/category/${i.sub_name}`;
                        return(
                          <NoteCard key={i.id} title={i} src={i} url={url}/>
                        );
                    }})}
                 </Grid>
            </Container>
        </div>
        );
}