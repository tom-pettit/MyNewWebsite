import React from 'react'
import { render } from '@testing-library/react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      border: 'none',
      boxShadow: 'none',
      marginRight: 0,
      flexGrow: 1,
    },
  
    title: {
        flexGrow: 1,
      },

    extrabuttons: {
    ['@media (max-width: 660px)']: {
        display: 'none',
    }
    },

    content: {
  
      ['@media (max-width: 660px)']: {
          paddingBottom: 0
      },
  
    },
  
    cardtitle: {
      ['@media (min-width: 860px)']: {
          fontSize: 110,
          marginBottom: 10
      },
      ['@media (max-width: 860px)']: {
          fontSize: 60,
          marginBottom: 10
      },
      ['@media (max-width: 660px)']: {
          fontSize: 35,
          marginBottom: 10
  
      },
  
        fontWeight: 'bold',
        fontFamily: 'Nunito Sans',
    },
    carddescription: {
        fontFamily: 'Nunito Sans',
        ['@media (min-width: 860px)']: {
          fontSize: 30,
        },
        ['@media (max-width: 860px)']: {
          fontSize: 15,
        },
        ['@media (max-width: 660px)']: {
          fontSize: 9,
          marginBottom: 0,
      },
    },
    box: {
      ['@media (min-width: 860px)']: {
          width: '860px',
          marginLeft: '-430px',
      },
      ['@media (max-width: 860px)']: {
          width: '560px',
          marginLeft: '-280px',
      },
      ['@media (max-width: 660px)']: {
          width: '350px',
          marginLeft: '-175px',
      },
  
  
      position: 'absolute',
      left: '50%',
      top: '30%',
  
    },
    icons: {
      ['@media (max-width: 660px)']: {
          fontSize: 'small'
      },
    },
  }));

const Navbar = () => {
    const classes = useStyles();

        return (
            <AppBar position="static" style={{backgroundColor: 'transparent', boxShadow: 'none'}}>
                    <Toolbar>
                        <Typography variant="h3" className={classes.title} style={{color: 'white', fontFamily: 'Seaweed Script', margin: 15}}>
                            <a href='/' style={{textDecoration: 'none', color: 'white'}}>tp</a>
                        </Typography>
                        <div className={classes.extrabuttons}>
                            <Button href='/about' style={{fontFamily: 'Nunito Sans', marginRight: 15, color: 'white'}} >About</Button>
                            <Button href='/portfolio' style={{fontFamily: 'Nunito Sans', marginRight: 15, color: 'white'}} >Porfolio</Button>
                            <Button style={{fontFamily: 'Nunito Sans', marginRight: 15, color: 'white'}} >Contact Me</Button>
                        </div>
                    </Toolbar>
            </AppBar>
        )
}

export default Navbar