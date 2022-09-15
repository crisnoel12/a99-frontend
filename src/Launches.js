import React, {useEffect, useState, Suspense} from 'react';
import axios from 'axios';
import {Card, Grid, Typography} from '@mui/material';
// import Launch from './Launch';
import LaunchAvatar from './images/launchavatar.png';
import CircularProgress from '@mui/material/CircularProgress';

const Launch = React.lazy(() => import('./Launch'));

function Launches() {
  const [launches, setLaunches] = useState(null);

  useEffect(() => {
    axios.get('https://api.spacexdata.com/v4/launches/')
    .then((response) => setLaunches(response.data))
  }, []);

  // TODO: Lazy load Launch components on scroll

  return (
    <>
      <Grid container component={Card} style={{ backgroundColor: 'white', textAlign: 'left', padding: '16px' }}>
        {
          launches ? launches.map((launch) => (
            <Suspense fallback={
              <Grid container style={{ marginBottom: '32px'}}>
                <Grid item xs={12} sm={2} style={{ textAlign: 'center'}}>
                  <img src={LaunchAvatar} />
                </Grid>
                <Grid item xs={12} sm={10}/>
              </Grid>
            }>
              <Launch 
                flight_number={launch.flight_number}
                mission_name={launch.name}
                details={launch.details}
                year={launch.year}
              />
            </Suspense>
          )) : null
        }
      </Grid>
      <Grid container style={{ textAlign: 'center', marginTop: '16px' }}>
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