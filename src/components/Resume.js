import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Typed from "react-typed";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "o auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "grey grey transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent grey grey",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    color: "#fff",
    background: "grey",
    lineHeight: 1,
    padding: "0.5rem 1rem",
    borderRadius: 50,
    border: 'none',
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "#ffffff",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "#fff",
    padding: 0,
    textTransform: "uppercase",
  },
  body1: {
    color: "grey",
  },
  subtitle1: {
    color: "tan",
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <Box component="header" className={classes.mainContainer}>
      <Typography variant="h4" align="center" className={classes.heading}>
        Completed courses
      </Typography>
      <Box component="div" className={classes.timeLine}>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2018
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Ultimate Web Designer & Developer Course:
            Design, Front & Back-End Programming
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Skills:
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            <Typed
              strings={[
                "PHOTOSHOP, HTML5, CSS3",
              ]}
              typeSpeed={30}
            />
            <br />
            <Typed
              strings={[
                "JAVASCRIPT, PHP, MySQL",
              ]}
              typeSpeed={30}
            />
            <br />
            <Typed
              strings={[
                "AngularJS basics",
              ]}
              typeSpeed={30}
            />
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2018
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Front End Advanced Course
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Skills:
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            <Typed
              strings={[
                "Project management fundamentals, Teamwork, Agile",
              ]}
              typeSpeed={30}
            />
            <br />
            <Typed
              strings={[
                "Advanced HTML, Advanced CSS, Responsive design",
              ]}
              typeSpeed={30}
            />
            <br />
            <Typed
              strings={[
                "Advanced JavaScript, Node.Js, Express.Js & NoSQL",
              ]}
              typeSpeed={30}
            />
            <br />
            <Typed
              strings={[
                "JavaScript and Browser: Document, Event, Interfaces, Debugging, API, FireBase, GIT.",
              ]}
              typeSpeed={30}
            />
            <br />
            <Typed
              strings={[
                "Application testing, Error handling",
              ]}
              typeSpeed={30}
            />
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2020
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            The Complete Web developer: zero to mastery
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Skills:
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >

            <br />
            <Typed
              strings={[
                "DOM Manipulation, Javascript (including ES6/ES7/ES8/ES9/ES10/ES2020), Asynchronous JavaScript,HTTP/JSON/AJAX",
              ]}
              typeSpeed={30}
            />
            <br />
            <Typed
              strings={[
                "React + Redux, Git + Github, Command Line",
              ]}
              typeSpeed={30}
            />
            <br />
            <Typed
              strings={[
                "Node.js, Express.js, NPM, RESTful API Design, PostgresSQL, SQL",
              ]}
              typeSpeed={30}
            />
            <br />
            <Typed
              strings={[
                "Authentication, Authorization, Scalable Infrastructure, Security, Production and Deployment",
              ]}
              typeSpeed={30}
            />

          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Resume;
