import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    pros: {
        textAlign: 'right',
        alignItems: 'right',
    }
});

export default function ButtonAction({buttonProcedure, buttonTips}){
    const classes = useStyles();
    return(
        <ButtonGroup className={classes.pros} variant="contained" color="primary">
         <Button onClick={buttonProcedure}>Procedure</Button>
         <Button onClick={buttonTips}>Tips</Button>
        </ButtonGroup>
        )
}