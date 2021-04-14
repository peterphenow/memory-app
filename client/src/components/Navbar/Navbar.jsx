import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Typography, Avatar, Toolbar, Button } from '@material-ui/core';
import useStyles from './styles';
import memories from '../../images/memories.jpg';

const Navbar = () => {
  const classes = useStyles();

  const user = null;

  return (
    <AppBar className={classes.appBar} position='static' color='inherit'>
      <div className={classes.brandContainer}>
        {/* Image by <a href="https://pixabay.com/users/alexandra_koch-621802/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3130379">Alexandra_Koch</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3130379">Pixabay</a> */}
        <img className={classes.image} src={memories} alt='memories' height='60' />
        <Typography component={Link} to='/' className={classes.heading} variant='h2' align='center'>
          Memories
        </Typography>
        {/* Image by <a href="https://pixabay.com/users/alexandra_koch-621802/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3130379">Alexandra_Koch</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3130379">Pixabay</a> */}
        <img className={classes.image} src={memories} alt='memories' height='60' />
      </div>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>
              {user.result.name.charAt(0)}
            </Avatar>
            <Typography className={classes.userName} variant='h6'>
              {user.result.name}
            </Typography>
            <Button variant='contained' className={classes.logout} color='secondary'>
              Logout
            </Button>
          </div>
        ) : (
          <Button component={Link} to='/auth' variant='contained' color='primary'>
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
