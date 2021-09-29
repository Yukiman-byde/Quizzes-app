import React from 'react';
import FooterInformation from './FooterInformation';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import Avatar from '@material-ui/core/Avatar';
import RssFeedIcon from '@material-ui/icons/RssFeed';

const useStyles = makeStyles({
    cancel: {
        margin: 0,
        padding: 30,
        width: '100%',
        height: '50vh',
        background: 'linear-gradient(60deg, rgba(9,119,121,1) 3%, rgba(0,161,255,1) 52%)',
        display: 'flex',
    },
    foot: {
        maxWidth: '1440px',
        width: '100%',
        height: '8vh',
        background: '#fefefe',
        display: 'flex',
    },
    couloir: {
        color: '#fefefe',
        flex: '0.2',
        textDecoration: 'underline',
        marginTop: '30px',
        textShadow: '0 0 10px #fefefe,0 0 15px #fefefe',
        flexGrow: 1,
    },
});

export default function Footer(){
    const classes = useStyles();
    return(
     <div>
        <div className={classes.cancel}>
             　<div className={classes.footer}>
                  <h3 className={classes.couloir}>Learning Japanese</h3>
               </div>
               <FooterInformation />
        </div>
    </div>
        );
}