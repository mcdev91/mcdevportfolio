import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typist from 'react-typist';
import { makeStyles } from "@material-ui/core/styles";
import Me from '../images/me.png';
import './HeaderCss.css';
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
    zIndex: 1
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={Me} alt="Martynas Čižas" />
      </Grid>
      <Typist className={classes.intro}>
        <span > Hi, I am Martynas Čižas</span>
        <Typist.Backspace count={23} delay={100} speed={10} />
        <span>Full Stack Web Developer</span>
        <Typist.Delay ms={500} />
        <br />
        <span>Technologies I Use:</span>
        <Typist.Delay ms={500} />
        <br />
        <span>React, Node, Express, NPM</span>
      </Typist>
      {/* <Typography className={classes.title} variant="h4">
        <Typed strings={["Martynas Čižas"]} typeSpeed={10} />
      </Typography>
      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={[
            "Full Stack Web Developer",
          ]}
          typeSpeed={100}
          backSpeed={10}
        />
        <Typography>
          <Typed
            strings={[
              "Technologies I Use:"]}
            typeSpeed={100}
            backSpeed={10}
          />
        </Typography>
        <Typography>
          <Typed
            strings={[
              "React, Node, Express"]}
            typeSpeed={60}
            backSpeed={10}
          />
        </Typography>
      </Typography> */}
    </Box>
  );
};

export default Header;