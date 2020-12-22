import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import emailjs from 'emailjs-com';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';
import { Alert } from '@material-ui/lab';
import Particles from "./Particles";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  form: {
    width: 200,
    marginTop: theme.spacing(1),
  },
  button: {
    marginTop: 25,
  },
  input: {
    backgroundColor: 'grey'
  },
}));

export default function Contact() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('mcdev1991', 'template_adfputRQ', e.target, 'user_sNwf4tlumvbRai41iSuEV')
      .then((result) => {
        window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
      }, (error) => {
        console.log(error.text);
      });
  }
  return (

    <React.Fragment>
      <Particles />
      <div className={classes.paper}>
        <Typography variant="h6" component="h6" gutterBottom>
          HIRE ME
            </Typography>
        <form onSubmit={sendEmail} className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required={true}
            fullWidth
            id="name"
            label="Your Name"
            name="from_name"
            autoComplete="name"
            autoFocus
            InputProps={{
              className: classes.input,
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required={true}
            fullWidth
            id="email"
            label="Email Address"
            name="from_email"
            autoComplete="email"
            autoFocus
            type='email'
            InputProps={{
              className: classes.input,
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required={true}
            fullWidth
            id="text"
            name="html_message"
            autoComplete="text"
            autoFocus
            placeholder="Your Message *"
            multiline
            rows={2}
            rowsMax={4}
            InputProps={{
              className: classes.input,
            }}
          />
          <Collapse in={open} className={classes.button}>
            <Alert
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
            >
              See you soon !
                    </Alert>
          </Collapse>
          <Button
            type="submit"
            variant="contained"
            color="default"
            onClick={() => {
              setOpen(true);
            }}
          >
            Send Mail
                </Button>
        </form>
      </div>
    </React.Fragment>
  );
}