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
import IconButton from '@material-ui/core/IconButton';
import TwitterIcon from '@material-ui/icons/Twitter';
import AddIcon from '@material-ui/icons/Add';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import MeImg from '../images/MeImg.jpg'
import UKCoronaTrackerImg from '../images/ukcoronatracker.png'
import BrumafriendHistoryImg from '../images/brumafriendhistory.png'
import HannahImaArtImg from '../images/hannahimaart.png'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import Paper from '@material-ui/core/Paper';
import CardActionArea from '@material-ui/core/CardActionArea';
import ReactImg from '../images/react.png'
import FirebaseImg from '../images/firebase.png'
import ConcurrentPlayersImg from '../images/concurrentplayers.png'
import RedditBotImg from '../images/redditbot.png'
import PythonImg from '../images/python.png'
import InfoIcon from '@material-ui/icons/Info';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 360
      },
    menuoption: {
        width: 250,
        marginBottom: 40
    },
    cardfont: {
        fontSize: '10px',
        fontFamily: 'Nunito Sans',
        fontWeight: 'bold'
    }

  }));

const ContactMe = () => {
    const classes = useStyles()

    return (
        <div style={{overflow: 'hidden'}}>
            <Navbar />
            <div style={{textAlign: 'center', marginTop: '10%'}}>
                <div style={{display: 'inline-block'}}>
                <Fade delay={750} duration={1500}>
                    <div style={{display: 'inline-block'}}>
                    <IconButton href='https://twitter.com/TomPettit9' target='_blank' style={{color: 'white', marginLeft: 20, marginRight: 20}}>
                        <TwitterIcon fontSize='large' className={classes.icons}/>
                    </IconButton>
                    </div>
                </Fade>

                <Fade delay={1250} duration={1500}>
                    <div style={{display: 'inline-block'}}>
                    <IconButton href='mailto:tomwpettit9@gmail.com' style={{color: 'white', marginLeft: 20, marginRight: 20}}>
                        <MailIcon fontSize='large' className={classes.icons}/>
                    </IconButton>
                    </div>
                </Fade>

                <Fade delay={1750} duration={1500}>
                    <div style={{display: 'inline-block'}}>
                    <IconButton href='https://www.facebook.com/tom.pettit.92798/' target='_blank' style={{color: 'white', marginLeft: 20, marginRight: 20}}>
                        <FacebookIcon fontSize='large' className={classes.icons}/>
                    </IconButton>
                    </div>
                </Fade>
                </div>
            </div>
        </div>
    )
}

export default ContactMe