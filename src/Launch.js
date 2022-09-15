import React from 'react'
import {Card, Grid, TextField, Typography} from '@mui/material';
import LaunchAvatar from './images/launchavatar.png';
import moment from 'moment';

function Launch(props) {
  const {flight_number, mission_name, year, details} = props;
  return (
    <Grid container style={{ marginBottom: '32px'}}>
      <Grid item xs={12} sm={2} style={{ textAlign: 'center'}}>
        <img src={LaunchAvatar} />
      </Grid>
      <Grid item xs={12} sm={10}>
        <Typography>{flight_number}: {mission_name} ({moment(year).format('YYYY')})</Typography>
        {details && <Typography variant={'body2'} style={{ color: 'gray' }}>
          <i>Details: {details}</i>
        </Typography>}
      </Grid>
    </Grid>
  )
}

export default Launch