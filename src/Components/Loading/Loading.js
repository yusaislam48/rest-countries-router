import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

export default function Loading() {
  // const classes = useStyles();

  return (
        <div className="d-flex justify-content-center align-items-center pt-5">
            <CircularProgress />
        </div>
  );
}
