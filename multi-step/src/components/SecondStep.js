import React, {useContext} from 'react'
import {Button,TextField} from "@mui/material"
import {multiStepContext} from '../StepContext'

function SecondStep(){
    const {setStep, userData,setUserData}=useContext(multiStepContext)
    return(
        <div>
            <div>
                <TextField label="Email" value={userData['Email']} onChange={(e)=>setUserData({...userData,"Email":e.target.value})} margin="normal" variant="outlined" color="secondary" />
            </div>
            <div>
                <TextField label="Contact" value={userData['Contact']} onChange={(e)=>setUserData({...userData,"Contact":e.target.value})}margin="normal" variant="outlined" color="secondary" />
            </div>
            <div>
                <TextField label="Alternate Number" value={userData['AlternateNumber']} onChange={(e)=>setUserData({...userData,"AlternateNumber":e.target.value})} margin="normal" variant="outlined" color="secondary" />
            </div>
            <div>
            <Button variant="contained" color="secondary" onClick={()=>setStep(1)}>Back</Button>
                <Button variant="contained" color="primary" onClick={()=>setStep(3)}>Next</Button>
            </div>
        </div>
    )

}
export default SecondStep