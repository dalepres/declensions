import Grid from '@mui/material/Grid';
import { Exercise } from './Components/Exercise';
import { Configurator } from './Components/Configurator.js';
import './App.css';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import { MobileNav } from './Components/MobileNav';

export default function Declensions() {

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })


  
  return (
    <div className="App">
      {/*<Exercise />*/}
      {isTabletOrMobile ? <MobileApp /> : <MobileApp /> }
    </div>
  );
}

  
const StartScreen = () => {
  return (
    <div className="App-start" sx={{width: '100%'}}>
    <Paper sx={{width: '100%'}} variant='elevated'>
      <Typography variant='h4'>Welcome</Typography>
      <Typography variant='h5'>to</Typography>
      <Typography variant='h4'>Declensions</Typography>
      <Typography variant='h6'>By</Typography>
      <Typography variant='h4'>Dale Preston</Typography>
    </Paper>
    </div>
  );
}





const MobileApp = () => {
  return (
    <>
      <MobileNav />
      <Divider />
      <MobileScreen />
    </>
  );
}


const MobileScreen = () => {
  return(
    <div >
      <Box>
        <Paper variant='outlined' sx={{ display: 'none' }}>
          <Configurator />
        </Paper>
        <Paper sx={{ display: 'none' }}>
          <StartScreen />
        </Paper>
        <Paper sx={{ display: 'block' }}>
          <Exercise />
        </Paper>
        <Paper sx={{ display: 'none' }} variant="outlined" backgroundColor="blue">
          <Box name='testName' sx={{ backgroundColor: 'blue' }}>
            <Typography>Testing some wider text. and then even wider, hopefully wider than the mobile screen.</Typography>
          </Box>
        </Paper>
        <Paper sx={{ display: 'none' }}><Typography>Testing23`</Typography></Paper>
      </Box>
    </div>
  );
}


  const MobileScreenTesting = () => {
      return(
        <div >
          <Box
            sx={{
              backgroundColor: 'primary.light',
              mx: 1
            }}>
            <div>{window.screen.width}</div>
            <div>{window.innerWidth}</div>
            text for mobile screen.<br />more text<br />and even more.
          </Box>

          <Box>
            <Paper variant='outlined' sx={{ display: 'none' }}>
              <Configurator />
            </Paper>
            <span id='startscreen' sx={{ display: 'none' }}>
              <StartScreen sx={{ textAlign: 'center', display: 'none' }} />
            </span>
            <Paper sx={{ display: 'none' }} variant="outlined" backgroundColor="blue">
              <Box name='testName' sx={{ backgroundColor: 'blue' }}>
                <Typography>Testing some wider text. and then even wider, hopefully wider than the mobile screen.</Typography>
              </Box>
            </Paper>
            <Paper sx={{ display: 'none' }}><Typography>Testing23`</Typography></Paper>
          </Box>
        </div>
      );
  }

  const DesktopApp = () => {
    return (
      <div>
      <Grid 
        container
        my={2} spacing={2}
      >
      <Grid 
        item xs=''
      >
          <Configurator />
        </Grid>
      </Grid>
    </div>
  );
}
