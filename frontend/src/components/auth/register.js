import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Alert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {validateRegister} from '../../services/validate';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Register() {
  const classes = useStyles();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const history = useHistory();

  const submitRegister = async (e) => {
      e.preventDefault();
    // const emailValue    = document.getElementById('emailRegister').value;
    // const passwordValue = document.getElementById('passwordRegister').value;
    // const usernameValue = document.getElementById('usernameRegister').value;

    // const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // if (!emailValue === '') {
    //   alert('Input your Email!');
    //   return false;
    // } else if (!re.test(emailValue)) {
    //   alert('Invalid email format!');
    //   return false;
    // } else if (passwordValue === '') {
    //   alert('Input your password!');
    //   return false;
    // } else if (usernameValue === '') {
    //   alert('Input UserName!');
    //   return false;
    // }


    const {status,message} = validateRegister(username, email, password);
    if(!status){
      setError(message)
      return;
    }

    const user = {
      user:username,
      email,
      password
    }

    const payload = {
      method: 'POST',
      body: JSON.stringify({user}),
      headers: {
        'Content-Type': 'application/json'
      },
    }

    try{

    const register_url  = `${process.env.REACT_APP_BACKEND_URL}:${process.env.REACT_APP_BACKEND_PORT}/api/public/register`;
    const response      = await fetch(register_url, payload)
    const result        = await response.json();

      if (response.status !== 200) {
        setError('Register Failed, try again.');
        return;
      }

      setSuccess('Sucessfully Registered!');
      setTimeout(()=>{
        history.push('/');
      },1000)

  }catch(err){
    setError(String(err))
  }

  }


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        {error && (<Alert style={{width:'100%'}} severity="error">
            {error}
        </Alert>)}
        {success && (<Alert style={{width:'100%'}} severity="success">
            {success}
        </Alert>)}
        <form onSubmit={submitRegister} className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="uname"
                onChange={(e)=>setUsername(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={(e)=>setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e)=>setPassword(e.target.value)}
              />
            </Grid>
            {/* <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid> */}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}