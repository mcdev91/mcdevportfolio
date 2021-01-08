import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Link from '@material-ui/core/Link';
import project1 from "../images/face_detection_app.jpg";
import project2 from "../images/pern_todo.jpg";


const useStyles = makeStyles((theme) => ({
  mainContainer: {
    height: "100vh",
    marginTop: 56,
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
  },
}));

const projects = [
  {
    name: "FACE DETECTION APP",
    description: `Authentication & Integrated Face Detection API <React, Express, Node, Postgres>`,
    image: project1,
    pageUrl: 'https://findface-ai.herokuapp.com/',
  },
  {
    name: "PERN todo APP",
    description: `All CRUD operations used. <React, Express, Node, Postgres> <on development>`,
    image: project2,
    pageUrl: 'https://mcdevtodo.herokuapp.com/',
  },
];

const Projects = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="200"
                  image={project.image}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Link
                  href={project.pageUrl}
                  variant="body2"
                  color="textSecondary"
                  target="_blank">
                  Live
                </Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
