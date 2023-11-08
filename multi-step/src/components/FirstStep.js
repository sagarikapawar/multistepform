import React, {useContext} from 'react'
import {Button,TextField} from "@mui/material"
import {multiStepContext} from '../StepContext'

function FirstStep(){
    const {setStep, userData,setUserData}=useContext(multiStepContext)
    return(
        <div>
            <div>
                <TextField label="First name" value={userData['FirstName']} onChange={(e)=>setUserData({...userData,"FirstName":e.target.value})} margin="normal" variant="outlined" color="secondary" />
            </div>
            <div>
                <TextField label="Middle name" value={userData['MiddleName']} onChange={(e)=>setUserData({...userData,"MiddleName":e.target.value})} margin="normal" variant="outlined" color="secondary" />
            </div>
            <div>
                <TextField label="Last Name" value={userData['LastName']} onChange={(e)=>setUserData({...userData,"LastName":e.target.value})} margin="normal" variant="outlined" color="secondary" />
            </div>
            <div>
                <Button variant="contained" color="primary" onClick={()=>setStep(2)}>Next</Button>
            </div>
        </div>
    )

}
export default FirstStep