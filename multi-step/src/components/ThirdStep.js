import React,{useContext}from 'react'
import {Button,TextField} from "@mui/material"
import {multiStepContext} from '../StepContext'


function ThirdStep(){
    const {setStep, userData,setUserData}=useContext(multiStepContext)

    return(
        <div>
            <div>
                <TextField label="County" value={userData['Country']} onChange={(e)=>setUserData({...userData,"Country":e.target.value})} margin="normal" variant="outlined" color="secondary" />
            </div>
            <div>
                <TextField label="State" value={userData['State']} onChange={(e)=>setUserData({...userData,"State":e.target.value})}margin="normal" variant="outlined" color="secondary" />
            </div>
            <div>
                <TextField label="City" value={userData['City']} onChange={(e)=>setUserData({...userData,"City":e.target.value})} margin="normal" variant="outlined" color="secondary" />
            </div>
            <div>
            <Button variant="contained" color="secondary" onClick={()=>setStep(2)}>Back</Button>

                <Button variant="contained" color="primary" onClick={()=>setStep(4)}>Next</Button>
            </div>
        </div>
    )

}
export default ThirdStep