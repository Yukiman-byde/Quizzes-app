import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';


const useStyles = makeStyles({
    card:{
        margin: '30px',
        marginBottom: '100px',
        marginTop: '100px',
        textAlign: 'center',
              height: 380,
        transition: '1s',
        cursor: 'pointer',
    '&:hover':{
          transform: 'translateY(-15px)',
       },
    },
    carte: {
        height: 300,
        maxWidth: 330,
    },
    couloir: {
        color: '#797171',
        fontSize: 'bold',
    },
});

export default function NoteCard({ title, src, url }){
    const classes = useStyles()
    return(
        <a href={url} style={{textDecoration: 'none'}}>
         <Card 
         elevation={2}
         className={classes.card}
         href="/display"
         >
               <CardHeader
               className={classes.couloir}
               title={title.name}
               />
              <CardActionArea>
                    <CardMedia
                    className={classes.carte}
                    component="img"
                    alt="categories"
                    src={src.picture}
                    >
                    </CardMedia>
              </CardActionArea>
           </Card>
          </a>
        );
}