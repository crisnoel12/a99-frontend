import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Card, Grid, TextField, Typography} from '@mui/material';
import Launch from './Launch';
import CircularProgress from '@mui/material/CircularProgress';

function Launches() {
  const [launches, setLaunches] = useState(null);

  useEffect(() => {
    axios.get('https://api.spacexdata.com/v4/launches/')
    .then((response) => setLaunches(response.data))
  }, []);

  return (
    <>
      <Grid container component={Card} style={{ backgroundColor: 'white', textAlign: 'left', padding: '16px' }}>
        {
          launches ? launches.map((launch) => (
            <Launch 
              flight_number={launch.flight_number}
              mission_name={launch.name}
              details={launch.details}
              year={launch.year}
            />
          )) : null
        }
      </Grid>
      <Grid container style={{ textAlign: 'center' }}>
        <Grid item xs={12}>
          {!launches ? (
            <CircularProgress />
          ) : (
          <Typography>End of the list</Typography>
          )}
        </Grid>
      </Grid>
    </>
  )
}

export default Launches