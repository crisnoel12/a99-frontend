import logo from './logo.svg';
import './App.css';
import {Grid, TextField, Typography} from '@mui/material';
import Launches from './Launches';

function App() {
  return (
    <div className="App">
      <Grid container style={{ width: '65%', margin: '0 auto' }}>
        <Grid item xs={12} style={{ backgroundColor: 'white', marginTop: '80px', marginBottom: '32px'}}>
          <TextField label="Enter keywords" variant="outlined" fullWidth />
        </Grid>
        <Launches/>
      </Grid>
    </div>
  );
}

export default App;
