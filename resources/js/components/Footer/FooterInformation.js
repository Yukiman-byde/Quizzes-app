import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';


const useStyles = makeStyles({
    information: {
        display: 'flex',
        flex:1,
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        color: '#fefefe',
        textShadow: '0 0 10px #fefefe,0 0 15px #fefefe',
        margin:30,
     
        '&:hover':{
            border: '1px white solid',
        }
    },
})

export default function FooterInformation(){
    const classes = useStyles();
    return(
            <div className={classes.information}>
           　<h1 style={{fontSize: 50}}>Speaking Japanese turns to easy!</h1>
           </div>
        )
}