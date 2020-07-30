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

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
      },
      media: {
        ['@media (min-width: 860px)']: {
            height: 190,
        },
        ['@media (max-width: 860px)']: {
            height: 140,
        },
      },
      cardtitle: {
          fontSize: 15
      },
      cardactionarea: {
        ['@media (min-width: 860px)']: {
            height: 275,
        },
        ['@media (max-width: 860px)']: {
            height: 200,
        },
      },
      largescreengrid: {
        ['@media (min-width: 860px)']: {
            display: 'visible'
        },
        ['@media (max-width: 860px)']: {
            display: 'none'
        },
      },
      mediumscreengrid: {
        ['@media (min-width: 660px)']: {
            display: 'visible'
        },
        ['@media (max-width: 660px)']: {
            display: 'none'
        },
        ['@media (min-width: 860px)']: {
            display: 'none'
        },
      },
      smallscreengrid: {
        ['@media (max-width: 660px)']: {
            display: 'visible'
        },
        ['@media (min-width: 660px)']: {
            display: 'none'
        },
      },
      carddescription: {
          height: '25px',
          overflow: 'hidden'
      }
  }));

const Portfolio = () => {
    const classes = useStyles();

    return (
        <>
        <Navbar />
        <div className={classes.root} style={{height: '100%', margin: 0}}>

            <div className={classes.largescreengrid}>
                <Grid container spacing={3}>

                    <Grid item xs={3}>
                    <Fade delay={500} duration={1500}>
                        <Card className={classes.root} style={{margin: 10}}>
                            <CardActionArea href='https://ukcoronatracker.web.app' target='_blank' className={classes.cardactionarea} style={{textDecoration: 'none'}}>
                                <CardMedia
                                    className={classes.media}
                                    image={UKCoronaTrackerImg}
                                    title="Contemplative Reptile"
                                />

                                <CardContent>
                                    <Typography className={classes.cardtitle} gutterBottom variant="h5" component="h2" style={{fontFamily: 'Nunito Sans'}}>
                                        ukcoronatracker.web.app
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p" style={{fontFamily: 'Nunito Sans'}}>
                                        A website used to track the COVID-19 situation in the UK
                                    </Typography>
                                </CardContent>
                            </CardActionArea>

                            <CardActions style={{textAlign: 'center'}}>
                                <IconButton href='' style={{color: 'black', display: 'inline-block'}}>
                                    <img src={ReactImg} height='30' width='30'/>
                                </IconButton>
                            </CardActions>
                        </Card>
                    </Fade>
                    </Grid>

                    <Grid item xs={3}>
                    <Fade delay={750} duration={1500}>
                        <Card className={classes.root} style={{margin: 10}}>
                            <CardActionArea href='https://brumafriendhistory.com' target='_blank' className={classes.cardactionarea} style={{textDecoration: 'none'}}>
                                <CardMedia
                                    className={classes.media}
                                    image={BrumafriendHistoryImg}
                                    title="Contemplative Reptile"
                                />

                                <CardContent>
                                    <Typography className={classes.cardtitle} gutterBottom variant="h5" component="h2" style={{fontFamily: 'Nunito Sans'}}>
                                        brumafriendhistory.com
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p" style={{fontFamily: 'Nunito Sans'}}>
                                        A blog website built for Brumafriend to showcase his History Articles
                                    </Typography>
                                </CardContent>
                            </CardActionArea>

                            <CardActions style={{textAlign: 'center'}}>
                                <IconButton href='' style={{color: 'black', display: 'inline-block'}}>
                                    <img src={ReactImg} height='30' width='30'/>
                                </IconButton>

                                <IconButton href='' style={{color: 'black', display: 'inline-block'}}>
                                    <img src={FirebaseImg} height='30' width='30'/>
                                </IconButton>
                            </CardActions>
                        </Card>
                    </Fade>
                    </Grid>

                    <Grid item xs={3}>
                    <Fade delay={1000} duration={1500}>
                        <Card className={classes.root} style={{margin: 10}}>
                            <CardActionArea href='https://hannahimaart-246f0.web.app/' target='_blank' className={classes.cardactionarea} style={{textDecoration: 'none'}}>
                                <CardMedia
                                    className={classes.media}
                                    image={HannahImaArtImg}
                                    title="Contemplative Reptile"
                                />

                                <CardContent>
                                    <Typography className={classes.cardtitle} gutterBottom variant="h5" component="h5" style={{fontFamily: 'Nunito Sans'}}>
                                        hannahimaart-246f0.web.app/
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p" style={{fontFamily: 'Nunito Sans'}}>
                                        An art portfolio and shop built for Hannah Ima.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>

                            <CardActions style={{textAlign: 'center'}}>
                                <IconButton href='' style={{color: 'black', display: 'inline-block'}}>
                                    <img src={ReactImg} height='30' width='30'/>
                                </IconButton>

                                <IconButton href='' style={{color: 'black', display: 'inline-block'}}>
                                    <img src={FirebaseImg} height='30' width='30'/>
                                </IconButton>
                            </CardActions>
                        </Card>
                    </Fade>
                    </Grid>

                    <Grid item xs={3}>
                    <Fade delay={1250} duration={1500}>
                        <Card className={classes.root} style={{margin: 10}}>
                            <CardActionArea href='https://concurrentplayers.com' target='_blank' className={classes.cardactionarea} style={{textDecoration: 'none'}}>
                                <CardMedia
                                    className={classes.media}
                                    image={ConcurrentPlayersImg}
                                    title="Contemplative Reptile"
                                />

                                <CardContent>
                                    <Typography className={classes.cardtitle} gutterBottom variant="h5" component="h2" style={{fontFamily: 'Nunito Sans'}}>
                                        concurrentplayers.com
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p" style={{fontFamily: 'Nunito Sans'}}>
                                        A website used to track the number of concurrent players of any steam game
                                    </Typography>
                                </CardContent>
                            </CardActionArea>

                            <CardActions style={{textAlign: 'center'}}>
                                <IconButton href='' style={{color: 'black', display: 'inline-block'}}>
                                    <img src={ReactImg} height='30' width='30'/>
                                </IconButton>

                                <IconButton href='' style={{color: 'black', display: 'inline-block'}}>
                                    <img src={FirebaseImg} height='30' width='30'/>
                                </IconButton>
                            </CardActions>
                        </Card>
                    </Fade>
                    </Grid>
                </Grid>
                
                <Grid container spacing={3}>
                <Grid item xs={3}>
                <Fade delay={1500} duration={1500}>
                    <Card className={classes.root} style={{margin: 10}}>
                        <CardActionArea href='https://github.com/tom-pettit/GeneralRedditBot' target='_blank' className={classes.cardactionarea} style={{textDecoration: 'none'}}>
                            <CardMedia
                                className={classes.media}
                                image={RedditBotImg}
                                title="Contemplative Reptile"
                            />

                            <CardContent>
                                <Typography className={classes.cardtitle} gutterBottom variant="h5" component="h2" style={{fontFamily: 'Nunito Sans'}}>
                                    General Reddit Bot
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p" style={{fontFamily: 'Nunito Sans'}}>
                                    An easy way to create reddit bots. Comes equipped with some prewritten functionality.
                                </Typography>
                            </CardContent>
                        </CardActionArea>

                        <CardActions style={{textAlign: 'center'}}>
                            <IconButton href='' style={{color: 'black', display: 'inline-block'}}>
                                <img src={PythonImg} height='30' width='30'/>
                            </IconButton>
                        </CardActions>
                    </Card>
                </Fade>
                </Grid>
            </Grid>
            </div>

            <div className={classes.mediumscreengrid}>
                <Grid container spacing={3}>

                    <Grid item xs={6}>
                    <Fade delay={500} duration={1500}>
                        <Card className={classes.root} style={{margin: 10}}>
                            <CardActionArea href='https://ukcoronatracker.web.app' target='_blank' className={classes.cardactionarea} style={{textDecoration: 'none'}}>
                                <CardMedia
                                    className={classes.media}
                                    image={UKCoronaTrackerImg}
                                    title="Contemplative Reptile"
                                />

                                <CardContent>
                                    <Typography className={classes.cardtitle} gutterBottom variant="h5" component="h2" style={{fontFamily: 'Nunito Sans'}}>
                                        ukcoronatracker.web.app
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p" style={{fontFamily: 'Nunito Sans'}} className={classes.carddescription}>
                                        A website used to track the COVID-19 situation in the UK
                                    </Typography>
                                </CardContent>
                            </CardActionArea>

                            <CardActions style={{textAlign: 'center'}}>
                                <IconButton href='' style={{color: 'black', display: 'inline-block'}}>
                                    <img src={ReactImg} height='30' width='30'/>
                                </IconButton>
                            </CardActions>
                        </Card>
                    </Fade>
                    </Grid>

                    <Grid item xs={6}>
                    <Fade delay={750} duration={1500}>
                        <Card className={classes.root} style={{margin: 10}}>
                            <CardActionArea href='https://brumafriendhistory.com' target='_blank' className={classes.cardactionarea} style={{textDecoration: 'none'}}>
                                <CardMedia
                                    className={classes.media}
                                    image={BrumafriendHistoryImg}
                                    title="Contemplative Reptile"
                                />

                                <CardContent>
                                    <Typography className={classes.cardtitle} gutterBottom variant="h5" component="h2" style={{fontFamily: 'Nunito Sans'}}>
                                        brumafriendhistory.com
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p" style={{fontFamily: 'Nunito Sans'}} className={classes.carddescription}>
                                        A blog website built for Brumafriend to showcase his History Articles
                                    </Typography>
                                </CardContent>
                            </CardActionArea>

                            <CardActions style={{textAlign: 'center'}}>
                                <IconButton href='' style={{color: 'black', display: 'inline-block'}}>
                                    <img src={ReactImg} height='30' width='30'/>
                                </IconButton>

                                <IconButton href='' style={{color: 'black', display: 'inline-block'}}>
                                    <img src={FirebaseImg} height='30' width='30'/>
                                </IconButton>
                            </CardActions>
                        </Card>
                    </Fade>
                    </Grid>

                    <Grid item xs={6}>
                    <Fade delay={1000} duration={1500}>
                        <Card className={classes.root} style={{margin: 10}}>
                            <CardActionArea href='https://hannahimaart-246f0.web.app/' target='_blank' className={classes.cardactionarea} style={{textDecoration: 'none'}}>
                                <CardMedia
                                    className={classes.media}
                                    image={HannahImaArtImg}
                                    title="Contemplative Reptile"
                                />

                                <CardContent>
                                    <Typography className={classes.cardtitle} gutterBottom variant="h5" component="h5" style={{fontFamily: 'Nunito Sans'}}>
                                        hannahimaart-246f0.web.app/
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p" style={{fontFamily: 'Nunito Sans'}} className={classes.carddescription}>
                                        An art portfolio and shop built for Hannah Ima.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>

                            <CardActions style={{textAlign: 'center'}}>
                                <IconButton href='' style={{color: 'black', display: 'inline-block'}}>
                                    <img src={ReactImg} height='30' width='30'/>
                                </IconButton>

                                <IconButton href='' style={{color: 'black', display: 'inline-block'}}>
                                    <img src={FirebaseImg} height='30' width='30'/>
                                </IconButton>
                            </CardActions>
                        </Card>
                    </Fade>
                    </Grid>

                    <Grid item xs={6}>
                    <Fade delay={1250} duration={1500}>
                        <Card className={classes.root} style={{margin: 10}}>
                            <CardActionArea href='https://concurrentplayers.com' target='_blank' className={classes.cardactionarea} style={{textDecoration: 'none'}}>
                                <CardMedia
                                    className={classes.media}
                                    image={ConcurrentPlayersImg}
                                    title="Contemplative Reptile"
                                />

                                <CardContent>
                                    <Typography className={classes.cardtitle} gutterBottom variant="h5" component="h2" style={{fontFamily: 'Nunito Sans'}}>
                                        concurrentplayers.com
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p" style={{fontFamily: 'Nunito Sans'}} className={classes.carddescription}>
                                        A website used to track the number of concurrent players of any steam game
                                    </Typography>
                                </CardContent>
                            </CardActionArea>

                            <CardActions style={{textAlign: 'center'}}>
                                <IconButton href='' style={{color: 'black', display: 'inline-block'}}>
                                    <img src={ReactImg} height='30' width='30'/>
                                </IconButton>

                                <IconButton href='' style={{color: 'black', display: 'inline-block'}}>
                                    <img src={FirebaseImg} height='30' width='30'/>
                                </IconButton>
                            </CardActions>
                        </Card>
                    </Fade>
                    </Grid>
                </Grid>
                
                <Grid container spacing={3}>
                <Grid item xs={6}>
                <Fade delay={1500} duration={1500}>
                    <Card className={classes.root} style={{margin: 10}}>
                        <CardActionArea href='https://github.com/tom-pettit/GeneralRedditBot' target='_blank' className={classes.cardactionarea} style={{textDecoration: 'none'}}>
                            <CardMedia
                                className={classes.media}
                                image={RedditBotImg}
                                title="Contemplative Reptile"
                            />

                            <CardContent>
                                <Typography className={classes.cardtitle} gutterBottom variant="h5" component="h2" style={{fontFamily: 'Nunito Sans'}}>
                                    General Reddit Bot
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p" style={{fontFamily: 'Nunito Sans'}} className={classes.carddescription}>
                                    An easy way to create reddit bots. Comes equipped with some prewritten functionality.
                                </Typography>
                            </CardContent>
                        </CardActionArea>

                        <CardActions style={{textAlign: 'center'}}>
                            <IconButton href='' style={{color: 'black', display: 'inline-block'}}>
                                <img src={PythonImg} height='30' width='30'/>
                            </IconButton>
                        </CardActions>
                    </Card>
                </Fade>
                </Grid>
            </Grid>
            </div>

            <div className={classes.smallscreengrid}>
                <Grid container spacing={3}>

                    <Grid item xs={12}>
                    <Fade delay={500} duration={1500}>
                        <Card className={classes.root} style={{margin: 10}}>
                            <CardActionArea href='https://ukcoronatracker.web.app' target='_blank' className={classes.cardactionarea} style={{textDecoration: 'none'}}>
                                <CardMedia
                                    className={classes.media}
                                    image={UKCoronaTrackerImg}
                                    title="Contemplative Reptile"
                                />

                                <CardContent>
                                    <Typography className={classes.cardtitle} gutterBottom variant="h5" component="h2" style={{fontFamily: 'Nunito Sans'}}>
                                        ukcoronatracker.web.app
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p" style={{fontFamily: 'Nunito Sans'}} className={classes.carddescription}>
                                        A website used to track the COVID-19 situation in the UK
                                    </Typography>
                                </CardContent>
                            </CardActionArea>

                            <CardActions style={{textAlign: 'center'}}>
                                <IconButton href='' style={{color: 'black', display: 'inline-block'}}>
                                    <img src={ReactImg} height='30' width='30'/>
                                </IconButton>
                            </CardActions>
                        </Card>
                    </Fade>
                    </Grid>

                    <Grid item xs={12}>
                    <Fade delay={750} duration={1500}>
                        <Card className={classes.root} style={{margin: 10}}>
                            <CardActionArea href='https://brumafriendhistory.com' target='_blank' className={classes.cardactionarea} style={{textDecoration: 'none'}}>
                                <CardMedia
                                    className={classes.media}
                                    image={BrumafriendHistoryImg}
                                    title="Contemplative Reptile"
                                />

                                <CardContent>
                                    <Typography className={classes.cardtitle} gutterBottom variant="h5" component="h2" style={{fontFamily: 'Nunito Sans'}}>
                                        brumafriendhistory.com
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p" style={{fontFamily: 'Nunito Sans'}} className={classes.carddescription}>
                                        A blog website built for Brumafriend to showcase his History Articles
                                    </Typography>
                                </CardContent>
                            </CardActionArea>

                            <CardActions style={{textAlign: 'center'}}>
                                <IconButton href='' style={{color: 'black', display: 'inline-block'}}>
                                    <img src={ReactImg} height='30' width='30'/>
                                </IconButton>

                                <IconButton href='' style={{color: 'black', display: 'inline-block'}}>
                                    <img src={FirebaseImg} height='30' width='30'/>
                                </IconButton>
                            </CardActions>
                        </Card>
                    </Fade>
                    </Grid>

                    <Grid item xs={12}>
                    <Fade delay={1000} duration={1500}>
                        <Card className={classes.root} style={{margin: 10}}>
                            <CardActionArea href='https://hannahimaart-246f0.web.app/' target='_blank' className={classes.cardactionarea} style={{textDecoration: 'none'}}>
                                <CardMedia
                                    className={classes.media}
                                    image={HannahImaArtImg}
                                    title="Contemplative Reptile"
                                />

                                <CardContent>
                                    <Typography className={classes.cardtitle} gutterBottom variant="h5" component="h5" style={{fontFamily: 'Nunito Sans'}}>
                                        hannahimaart-246f0.web.app/
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p" style={{fontFamily: 'Nunito Sans'}} className={classes.carddescription}>
                                        An art portfolio and shop built for Hannah Ima.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>

                            <CardActions style={{textAlign: 'center'}}>
                                <IconButton href='' style={{color: 'black', display: 'inline-block'}}>
                                    <img src={ReactImg} height='30' width='30'/>
                                </IconButton>

                                <IconButton href='' style={{color: 'black', display: 'inline-block'}}>
                                    <img src={FirebaseImg} height='30' width='30'/>
                                </IconButton>
                            </CardActions>
                        </Card>
                    </Fade>
                    </Grid>

                    <Grid item xs={12}>
                    <Fade delay={1250} duration={1500}>
                        <Card className={classes.root} style={{margin: 10}}>
                            <CardActionArea href='https://concurrentplayers.com' target='_blank' className={classes.cardactionarea} style={{textDecoration: 'none'}}>
                                <CardMedia
                                    className={classes.media}
                                    image={ConcurrentPlayersImg}
                                    title="Contemplative Reptile"
                                />

                                <CardContent>
                                    <Typography className={classes.cardtitle} gutterBottom variant="h5" component="h2" style={{fontFamily: 'Nunito Sans'}}>
                                        concurrentplayers.com
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p" style={{fontFamily: 'Nunito Sans'}} className={classes.carddescription}>
                                        A website used to track the number of concurrent players of any steam game
                                    </Typography>
                                </CardContent>
                            </CardActionArea>

                            <CardActions style={{textAlign: 'center'}}>
                                <IconButton href='' style={{color: 'black', display: 'inline-block'}}>
                                    <img src={ReactImg} height='30' width='30'/>
                                </IconButton>

                                <IconButton href='' style={{color: 'black', display: 'inline-block'}}>
                                    <img src={FirebaseImg} height='30' width='30'/>
                                </IconButton>
                            </CardActions>
                        </Card>
                    </Fade>
                    </Grid>
                </Grid>
                
                <Grid container spacing={3}>
                <Grid item xs={12}>
                <Fade delay={1500} duration={1500}>
                    <Card className={classes.root} style={{margin: 10}}>
                        <CardActionArea href='https://github.com/tom-pettit/GeneralRedditBot' target='_blank' className={classes.cardactionarea} style={{textDecoration: 'none'}}>
                            <CardMedia
                                className={classes.media}
                                image={RedditBotImg}
                                title="Contemplative Reptile"
                            />

                            <CardContent>
                                <Typography className={classes.cardtitle} gutterBottom variant="h5" component="h2" style={{fontFamily: 'Nunito Sans'}}>
                                    General Reddit Bot
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p" style={{fontFamily: 'Nunito Sans'}} className={classes.carddescription}>
                                    An easy way to create reddit bots. Comes equipped with some prewritten functionality.
                                </Typography>
                            </CardContent>
                        </CardActionArea>

                        <CardActions style={{textAlign: 'center'}}>
                            <IconButton href='' style={{color: 'black', display: 'inline-block'}}>
                                <img src={PythonImg} height='30' width='30'/>
                            </IconButton>
                        </CardActions>
                    </Card>
                </Fade>
                </Grid>
            </Grid>
            </div>


        </div>
        </>
    )
}

export default Portfolio