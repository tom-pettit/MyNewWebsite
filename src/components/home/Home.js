import React from 'react' 
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Typewriter from 'typewriter-effect';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import Particles from 'react-particles-js';
import {ProgressBar} from 'react-bootstrap';
import {CircularProgressbar, buildStyles} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { easeQuadInOut } from "d3-ease";
import {useSpring, animated, config} from 'react-spring'
import Navbar from '../navbars/Navbar';
import Fade from 'react-reveal/Fade';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles((theme) => ({
    root: {
      border: 'none',
      boxShadow: 'none',
      marginRight: 0,
      flexGrow: 1,
    },

    intro: {
        ['@media (min-width: 860px)']: {
            fontSize: 40,
        },
        ['@media (max-width: 860px)']: {
            fontSize: 30,
        },
        ['@media (max-width: 660px)']: {
            fontSize: 20,
    
        },
    },
  
    title: {
        ['@media (max-width: 660px)']: {
            textAlign: 'center'
        },
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
          fontSize: 90,
          marginBottom: 50
      },
      ['@media (max-width: 860px)']: {
          fontSize: 70,
          marginBottom: 10
      },
      ['@media (max-width: 660px)']: {
          fontSize: 50,
          marginBottom: 10
  
      },
  
        fontWeight: 'bold',
        fontFamily: 'Nunito Sans',
    },
    carddescription: {
        fontFamily: 'Nunito Sans',
        ['@media (min-width: 860px)']: {
          fontSize: 40,
        },
        ['@media (max-width: 860px)']: {
          fontSize: 18,
        },
        ['@media (max-width: 660px)']: {
          fontSize: 15,
          marginBottom: 0,
      },
    },
    carddescriptionscores: {
        fontFamily: 'Nunito Sans',
        ['@media (min-width: 860px)']: {
          fontSize: 20,
        },
        ['@media (max-width: 860px)']: {
          fontSize: 11,
        },
        ['@media (max-width: 660px)']: {
          fontSize:10,
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
  
  
      position: 'relative',
      left: '50%',
      top: '15%',
  
    },
    icons: {
      ['@media (max-width: 660px)']: {
          fontSize: 'small'
      },
    },
    progress: {
        ['@media (min-width: 860px)']: {
            width: '100px',
        },
        ['@media (max-width: 860px)']: {
            width: '80px',
        },
        ['@media (max-width: 660px)']: {
            width: '60px',
        },

    },
    skillcontainer: {
        ['@media (min-width: 860px)']: {
            width: '400px',
        },
        ['@media (max-width: 860px)']: {
            width: '350px',
        },
        ['@media (max-width: 660px)']: {
            width: '300px',
        },

    },
    language: {
        textAlign: "left",
        fontFamily: 'Nunito Sans',
        ['@media (min-width: 860px)']: {
          fontSize: 40,
        },
        ['@media (max-width: 860px)']: {
          fontSize: 18,
        },
        ['@media (max-width: 660px)']: {
          fontSize: 15,
          marginBottom: 0,
      },
    }
  }));

const Home = () => {
    const classes = useStyles();

    return (
        <div id='wwhole' style={{maxHeight: '100vh', margin: 0}}>
            <Fade delay={11500}>
                <Navbar />
            </Fade>
            <div className={classes.root} style={{marginTop: '15vh'}}>
                <div style={{height: '100%', margin: 0, backgroundColor: 'black'}}>
                    <div className={classes.box}>
                        <h1 className={classes.intro} style={{color: 'white', marginLeft: 20}}>
                            <Typewriter
                                onInit={(typewriter) => {
                                    typewriter.typeString("Hi, I'm Tom. <br></br> I'm a Computer Science student at Durham University.")
                                    .start();
                                }}
                            />
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home