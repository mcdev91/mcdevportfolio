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

const button = {
  background: "black",
  borderRadius: 3,
  border: 0,
  color: '#dedede',
  height: 50,
  fontSize: 15,
  padding: '0 20px',
  boxShadow: '0 0px 5px 5px rgba(0, 0, 0)',
  borderRadius: 50
};

const useStyles = makeStyles((theme) => ({
  mainDiv: {
    height: "100vh",
    top: 0,
    flexDirection: "column",
    backgroundColor: '#dedede',
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    alignItems: 'center',
    width: "100%",
  },
  form: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "50vw",
    textAlign: "center",
  },
  button: {
    marginTop: 25,
  },
  contactTag: {
    color: "#000000",
    fontSize: 30,
    textTransform: "uppercase"
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
    <div className={classes.mainDiv}>
      <div className={classes.paper}>
        <form onSubmit={sendEmail} className={classes.form} noValidate>
          <Typography className={classes.contactTag}>Contact</Typography>
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
            style={button}
            type="submit"
            variant="contained"
            color="default"
            onClick={() => {
              setOpen(true);
            }}
          >
            Send Email
                </Button>
        </form>
      </div>
    </div>
  );
}