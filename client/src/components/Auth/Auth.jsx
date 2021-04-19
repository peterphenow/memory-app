import React, { useState } from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { GoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Icon from './icon';
import useStyles from './styles';
import Input from './Input';

const Auth = () => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);

  const handleSubmit = () => {};

  const handleChange = () => {};

  const switchMode = () => {
    //will switch the state on/off, true/false
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };

  const googleSuccess = async (res) => {
    // console.log(res);
    // optional chaining operator '?' will not throw an error if we don't have access to the res object
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: 'AUTH', data: { result, token } });

      //redirect to home page
      history.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  const googleFailure = (error) => {
    console.log('Google Sign In was unsuccessful. Try again later.');
    console.log(error);
  };

  return (
    <Container component='main' maxWidth='xs'>
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant='h5'>{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input name='firstName' label='First Name' handleChange={handleChange} autoFocus half />
                <Input name='lastName' label='Last Name' handleChange={handleChange} half />
              </>
            )}
            <Input name='email' label='Email Address' handleChange={handleChange} type='email' />
            <Input
              name='password'
              label='Password'
              handleChange={handleChange}
              type={showPassword ? 'text' : 'password'}
              handleShowPassword={handleShowPassword}
            />
            {isSignup && <Input name='confirmPassword' label='Repeat Password' handleChange={handleChange} type='password' />}
          </Grid>
          <Button className={classes.submit} type='submit' fullWidth variant='contained' color='primary'>
            {isSignup ? 'Sign Up' : 'Sign In'}
          </Button>
          <GoogleLogin
            clientId='604052277282-4e9r8u5otouc73n1nvcnjo674hrgqrvn.apps.googleusercontent.com'
            render={(renderProps) => (
              <Button
                className={classes.googleButton}
                color='primary'
                fullWidth
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                startIcon={<Icon />}
                variant='contained'>
                Google Sign In
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy='single_host_origin'
          />
          <Grid container justify='flex-end'>
            <Grid item>
              <Button onClick={switchMode}>{isSignup ? 'Already have an account? Sign In.' : "Don't have an account? Sign Up."}</Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
