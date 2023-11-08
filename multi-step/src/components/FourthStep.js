import React ,{useContext}from 'react'
import {Button,TextField} from "@mui/material"
import {multiStepContext} from '../StepContext'


function FourthStep(){
    const {setStep, userData,setUserData,submitData}=useContext(multiStepContext)

    return(
        <div>
            <div>
                <TextField label="Address" value={userData['Address']} onChange={(e)=>setUserData({...userData,"Address":e.target.value})} margin="normal" variant="outlined" color="secondary" />
            </div>
            <div>
                <TextField label="Id Proof" value={userData['IdProof']} onChange={(e)=>setUserData({...userData,"IdProof":e.target.value})} margin="normal" variant="outlined" color="secondary" />
            </div>
            <div>
                <TextField label="District" value={userData['District']} onChange={(e)=>setUserData({...userData,"District":e.target.value})} margin="normal" variant="outlined" color="secondary" />
            </div>
            <div>
            <Button variant="contained" color="secondary" onClick={()=>setStep(3)}>Back</Button>

                <Button variant="contained" color="primary" onClick={submitData}>Submit</Button>
            </div>
        </div>
    )

}
export default FourthStep