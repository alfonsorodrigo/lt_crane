import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles, Box } from '@material-ui/core';

const useStylesSpinner = makeStyles((theme) => ({
  root: {
    position: 'relative',
  },
  bottom: {
    color: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  top: {
    color: '#1a90ff',
    animationDuration: '550ms',
    position: 'absolute',
    left: 0,
  },
  circle: {
    strokeLinecap: 'round',
  },
}));

const Spinner = (props) => {
  const classes = useStylesSpinner();

  return (
    <Box display='flex' justifyContent='center' alignItems='center'>
      <div className={classes.root}>
        <CircularProgress
          variant='determinate'
          className={classes.bottom}
          size={40}
          thickness={4}
          {...props}
          value={100}
        />
        <CircularProgress
          variant='indeterminate'
          disableShrink
          className={classes.top}
          classes={{
            circle: classes.circle,
          }}
          size={40}
          thickness={4}
          {...props}
        />
      </div>
    </Box>
  );
};
export default Spinner;
