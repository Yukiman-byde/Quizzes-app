import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@mui/material/Box';


const useStyles = makeStyles((theme) => ({
   root:{
     '&>*':{
        margin: theme.spacing(3.5),
     }
   },
   huge: {
      height: theme.spacing(80),
   },
   children: {
      height: theme.spacing(38),
   },
}));

export default function DisplayAdvance(){
   const classes = useStyles();
   const [spike, setSpike] = useState([]);
   const [tidori, setTidori] = useState([]);
   const [news, setNews] = useState([]);
   
   useEffect(()=>{
      axios.get('/category/json/Advance').then(res=>{
         setSpike(res.data[0]);
         setTidori(res.data[1]);
         setNews(res.data[2]);
      });
   },[]);
   return(
      <div>
      <Box sx={{FlexGrow: 1}}>
         <Grid container className={classes.root}>
             <Grid item md={12} xs={12} sm={12} lg={6}>
                 <a href="/display/Advance/8" style={{textDecoration: 'none'}}>
                         <Card>
                           <CardActionArea>
                                <CardMedia
                                className={classes.huge}
                                image={news.thumbnail}
                                >
                                 <CardContent>
                                       <Typography variant="h3" component="h3" style={{color: '#fff'}}>
                                          {news.name}
                                       </Typography>
                                 </CardContent>
                                </CardMedia>
                           </CardActionArea>
                         </Card>
                  </a>
             </Grid>
             <Grid item md={12} sx={12} xs={12} lg={5} >
                <Grid item md={12} sx={12} xs={12} lg={2.5}> 
                  <a href="/display/Advance/6" style={{textDecoration: 'none'}}>
                <Card className={classes.children} style={{marginBottom: '30px'}} >
                  <CardActionArea>
                       <CardMedia
                       className={classes.huge}
                       image={spike.thumbnail}
                       >
                        <CardContent>
                              <Typography variant="h3" component="h3" style={{color: '#fff'}}>
                                 {spike.name}
                              </Typography>
                        </CardContent>
                       </CardMedia>
                  </CardActionArea>
                </Card>
                </a>
                </Grid>
                <Grid item md={12} sm={12} xs={12} lg={2.5}>
                  <a href="/display/Advance/7" style={{textDecoration: 'none'}}>
               <Card className={classes.children} >
                  <CardActionArea>
                       <CardMedia
                       className={classes.huge}
                       image={tidori.thumbnail}
                       >
                        <CardContent>
                              <Typography variant="h3" component="h3" style={{color: '#fff'}}>
                                 {tidori.name}
                              </Typography>
                        </CardContent>
                       </CardMedia>
                  </CardActionArea>
                </Card>
                </a>
                </Grid>
             </Grid>
          </Grid>
       </Box>
      </div>
      );
}