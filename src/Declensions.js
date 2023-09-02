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
import {useState} from 'react';

export default function Declensions() {

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
   
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
  const [activeScreen, setActiveScreen] = useState('home');
  
  const getNavSelection = (navSelection) => {
    setActiveScreen(navSelection);
    return (navSelection);
  }

  return (
    <>
      <MobileNav getNavSelection={getNavSelection} />
      <Divider />
      <MobileScreen navSelection={activeScreen} />
    </>
  );
}


const MobileScreen = (props) => {
  const navSelection = props.navSelection;
  const displayConfig = 
    navSelection === 'config'
      ? 'block' : 'none';
  const displayExercise =
    navSelection === 'exercise'
      ? 'block' : 'none';
      var displayStart = 
      navSelection === 'home' || 
        (!displayConfig && !displayExercise)
          ? 'block' : 'none';

  return (
    <div >
      <Box>
        <Paper elevation='0'
          sx={{display: displayConfig}}
        >
          <Configurator />
        </Paper>
        <Paper elevation='0'
          sx={{ display: displayStart }}
        >
          <StartScreen />
        </Paper>
        <Paper elevation='0'
          sx={{ display: displayExercise }}
        >
          <Exercise />
        </Paper>
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
