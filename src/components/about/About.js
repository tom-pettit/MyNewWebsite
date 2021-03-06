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
import AnimatedProgressProvider from "./AnimatedProgressProvider";
import {CircularProgressbar, buildStyles} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { easeQuadInOut } from "d3-ease";
import {useSpring, animated, config} from 'react-spring'
import Navbar from '../navbars/Navbar';
import Fade from 'react-reveal/Fade';
import IconButton from '@material-ui/core/IconButton';
import TwitterIcon from '@material-ui/icons/Twitter';
import AddIcon from '@material-ui/icons/Add';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import MeImg from '../images/MeImg.jpg'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import ReactImg from '../images/react.png'
import PythonImg from '../images/python.png'
import JSImg from '../images/javascript.png'
import JavaImg from '../images/java.png'
import VueImg from '../images/vue.png'

const useStyles = makeStyles((theme) => ({
    root: {
      border: 'none',
      boxShadow: 'none',
      marginRight: 0,
      flexGrow: 1,
    },
  
    title: {
        ['@media (max-width: 660px)']: {
            textAlign: 'center'
        },
        flexGrow: 1,
      },
    cover: {
    ['@media (min-width: 860px)']: {
        width: 140,
        height: 140,
        margin: 20,
        marginLeft: 40,
    },
    ['@media (max-width: 860px)']: {
        width: 280,
        margin: 15,
        marginLeft: 42,
        marginRight: 30
    },
    ['@media (max-width: 660px)']: {
        width: 120,
        height: 120,
        margin: 10,
        marginLeft: 8,
        marginRight: 0
    },

    borderRadius: '50%',
    border: '2px solid white'
    },

    details: {
        display: 'flex',
        flexDirection: 'column',
      },

    extrabuttons: {
    ['@media (max-width: 660px)']: {
        display: 'none',
    }
    },

    content: {
      flex: '1 0 auto',
      ['@media (max-width: 660px)']: {
          paddingBottom: 0
      },
  
    },
    myinfocardtitle: {
      ['@media (min-width: 860px)']: {
          fontSize: 30,
          marginBottom: 10
      },
      ['@media (max-width: 860px)']: {
          fontSize: 20,
          marginBottom: 10
      },
      ['@media (max-width: 660px)']: {
          fontSize: 20,
          marginBottom: 10
  
      },
  
        fontWeight: 'bold',
        fontFamily: 'Nunito Sans',
    },
    myinfocarddescription: {
        fontFamily: 'Nunito Sans',
        ['@media (min-width: 860px)']: {
          fontSize: 15,
          width: 612,
        },
        ['@media (max-width: 860px)']: {
          fontSize: 15,
          width: 310,
        },
        ['@media (max-width: 660px)']: {
          fontSize: 11,
          marginBottom: 0,
          width: 160
      },
    },
  
    cardtitle: {
      ['@media (min-width: 860px)']: {
          fontSize: 30,
          marginTop: 50
      },
      ['@media (max-width: 860px)']: {
          fontSize: 25,
          marginTop: 40
      },
      ['@media (max-width: 660px)']: {
          fontSize: 20,
          marginTop: 30
  
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
        ['@media (max-width: 370px)']: {
            width: '40px',
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
    },
    image: {
        ['@media (min-width: 860px)']: {
            width: '100px',
            height: '100px'
          },
          ['@media (max-width: 660px)']: {
            width: '25px',
            height: '25px'
          },

    }
  }));

const About = () => {
    const classes = useStyles();

    return (
        <div id='wwhole' style={{maxHeight: '100vh', margin: 0}}>
            <Navbar />
            <div className={classes.root} style={{height: '100%'}}>
                <div className={classes.box}>
                    <Card className={classes.root} style={{display: 'flex', backgroundColor: 'black'}}>
                        <div className={classes.details}>
                            <CardContent className={classes.content}>
                            <Typography component="h5" variant="h5" className={classes.myinfocardtitle} style={{color: 'white'}}>
                                Tom Pettit
                            </Typography>
                            <Typography className={classes.myinfocarddescription} style={{color: 'white'}}>
                                Web Developer, Python Programmer, Tech Enthusiast
                            </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton href='https://www.linkedin.com/in/tomwpettit/' target='_blank' style={{color: 'white'}}>
                                    <LinkedInIcon className={classes.icons}/>
                                </IconButton>
                                <IconButton href='https://github.com/tom-pettit' target='_blank' style={{color: 'white'}}>
                                    <GitHubIcon className={classes.icons}/>
                                </IconButton>
                                <IconButton href='https://www.facebook.com/tom.pettit.92798/'  target='_blank' style={{color: 'white'}}>
                                    <FacebookIcon className={classes.icons}/>
                                </IconButton>
                            </CardActions>
                        </div>
                        <CardMedia
                            className={classes.cover}
                            image={MeImg}
                        />
                    </Card>
                </div>
                <div style={{height: '100%', margin: 0, backgroundColor: 'black', textAlign: 'center', marginTop: '5%'}}>

                    <Fade delay={250} duration={1000}>
                        <div>
                            <Typography component="h5" variant="h5" className={classes.language} style={{fontFamily: 'Nunito Sans', color: 'white', textAlign: 'center'}}>
                                Technologies I'm proficient in...
                            </Typography>
                        </div>
                    </Fade>

                    <div style={{width: '100%', display: 'inline-block', margin: '0 auto', marginTop: '2%'}}>
                        <Fade delay={500} duration={1500}>
                        <div style={{textAlign: 'center', display: 'inline-block', marginRight: 20}}>
                            <Typography component="h5" variant="h5" className={classes.language} style={{fontFamily: 'Nunito Sans', color: 'white', textAlign: 'center'}}>
                                Python 
                            </Typography>
                            <img className={classes.image} src={PythonImg} height='100' width='100' ></img>

                        </div>
                        </Fade>

                        <Fade delay={750} duration={1500}>
                        <div style={{textAlign: 'center', display: 'inline-block', marginLeft: 20, marginRight: 20}}>
                            <Typography component="h5" variant="h5" className={classes.language} style={{fontFamily: 'Nunito Sans', color: 'white', textAlign: 'center'}}>
                                JavaScript 
                            </Typography>
                            <img className={classes.image} src={JSImg} height='100' width='100' ></img>

                        </div>
                        </Fade>

                        <Fade delay={1000} duration={1500}>
                        <div style={{textAlign: 'center', display: 'inline-block', marginLeft: 20, marginRight: 20}}>
                            <Typography component="h5" variant="h5" className={classes.language} style={{fontFamily: 'Nunito Sans', color: 'white', textAlign: 'center'}}>
                                React 
                            </Typography>
                            <img className={classes.image} src={ReactImg} height='100' width='100' ></img>
                        </div>
                        </Fade>

                        <Fade delay={1250} duration={1500}>
                        <div style={{textAlign: 'center', display: 'inline-block', marginLeft: 20}}>
                            <Typography component="h5" variant="h5" className={classes.language} style={{fontFamily: 'Nunito Sans', color: 'white', textAlign: 'center'}}>
                                Java 
                            </Typography>
                            <img className={classes.image} src={JavaImg} height='100' width='100' ></img>

                        </div>
                        </Fade>

                        <Fade delay={1500} duration={1500}>
                        <div style={{textAlign: 'center', display: 'inline-block', marginLeft: 20}}>
                            <Typography component="h5" variant="h5" className={classes.language} style={{fontFamily: 'Nunito Sans', color: 'white', textAlign: 'center'}}>
                                Vue 
                            </Typography>
                            <img className={classes.image} src={VueImg} height='100' width='100' ></img>

                        </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About