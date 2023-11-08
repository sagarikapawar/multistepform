import React ,{useContext} from 'react';

import './App.css';
import FirstStep from './components/FirstStep';
import SecondStep from './components/SecondStep';
import ThirdStep from './components/ThirdStep';
import FourthStep from './components/FourthStep';
import {Stepper,StepLabel,Step} from '@mui/material'
import { multiStepContext } from './StepContext';
import DisplayData from './components/DisplayData';


function App() {
  const {currentStep,finalData}=useContext(multiStepContext)
  function showStep(step){
    switch(step){
      case 1:
        return <FirstStep/>
      case 2:
        return <SecondStep/>
      case 3:
        return <ThirdStep/>
      case 4:
        return <FourthStep/>
        }
  }
  return (
    <div className="App">
      <header className='app-header'>
        <h1>Multi Step Form</h1>
        <div>
        <Stepper activeStep={currentStep-1} orientation='horizontal'>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
        </Stepper>
        </div>
        {showStep(currentStep)}
        <br/>
        {finalData.length > 0 ? <DisplayData/> :'' }
        
      </header>
        
    </div>
  
        
  );
}

export default App;
