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

const Menu = () => {
    const classes = useStyles()

    return (
        <div style={{overflow: 'hidden'}}>
        <Navbar />
        <div style={{width: '100%', textAlign: 'center', marginTop: 40}}>

            <div style={{display: 'inline-block'}}>

            <Fade delay={500} duration={1500}>
                <div className={classes.menuoption} style={{display: 'block', fontFamily: 'Nunito Sans'}}>
                    <CardActionArea href='/about' className={classes.cardactionarea} style={{textDecoration: 'none'}}>
                        <Card className={classes.root}>
                            <CardHeader
                                titleTypographyProps={classes.cardfont}
                                title="About Me"
                            />
                        </Card>
                    </CardActionArea>
                </div>
            </Fade>

            <Fade delay={1000} duration={1500}>
                <div className={classes.menuoption} style={{display: 'block', fontFamily: 'Nunito Sans'}}>
                    <CardActionArea href='/portfolio' className={classes.cardactionarea} style={{textDecoration: 'none'}}>
                        <Card className={classes.root}>
                            <CardHeader
                                titleTypographyProps={classes.cardfont}
                                title="Portfolio"
                            />
                        </Card>
                    </CardActionArea>
                </div>
            </Fade>

            <Fade delay={1500} duration={1500}>
                <div className={classes.menuoption} style={{display: 'block', fontFamily: 'Nunito Sans'}}>
                    <CardActionArea href='/contact' className={classes.cardactionarea} style={{textDecoration: 'none'}}>
                        <Card className={classes.root}>
                            <CardHeader
                                titleTypographyProps={classes.cardfont}
                                title="Contact Me"
                            />
                        </Card>
                    </CardActionArea>
                </div>
            </Fade>
            </div>

        </div>
        </div>
    )
}

export default Menu