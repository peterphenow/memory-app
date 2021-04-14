import React from 'react';
import { AppBar, Typography } from '@material-ui/core';
import useStyles from './styles';
import memories from '../../images/memories.jpg';

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} position='static' color='inherit'>
      {/* Image by <a href="https://pixabay.com/users/alexandra_koch-621802/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3130379">Alexandra_Koch</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3130379">Pixabay</a> */}
      <img className={classes.image} src={memories} alt='memories' height='60' />
      <Typography className={classes.heading} variant='h2' align='center'>
        Memories
      </Typography>
      {/* Image by <a href="https://pixabay.com/users/alexandra_koch-621802/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3130379">Alexandra_Koch</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3130379">Pixabay</a> */}
      <img className={classes.image} src={memories} alt='memories' height='60' />
    </AppBar>
  );
};

export default Navbar;
