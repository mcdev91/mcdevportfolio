import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typist from 'react-typist';
import { makeStyles } from "@material-ui/core/styles";
import Me from '../images/me.png';

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    margin: theme.spacing(1),
    background: "none",
  },
  intro: {
    color: "#dedede",
    fontSize: 25
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
    height: 320,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={Me} alt="Martynas Čižas" />
      </Grid>
      <Typist
        className={classes.intro}
        avgTypingDelay={30}
      >
        <span > Hi, I am Martynas Čižas</span>
        <Typist.Backspace count={23} delay={1000} speed={10} />
        <span>Full Stack Web Developer</span>
        <Typist.Delay ms={1000} />
        <br />
        <span>Technologies I Use:</span>
        <Typist.Delay ms={500} />
        <br />
        <span>React, Node, Express, PostgreSQL, NPM, Git, SPA</span>
      </Typist>
    </Box>
  );
};

export default Header;