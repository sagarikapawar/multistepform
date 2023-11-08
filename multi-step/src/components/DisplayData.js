import React, { useContext } from 'react';
import {TableContainer,TableHead,TableBody,TableCell,TableRow,Table} from '@mui/material'
import { multiStepContext } from '../StepContext';
function DisplayData(){
    const {finalData}=useContext(multiStepContext);
        
    return(
        
        <div>
<TableContainer>
    <Table>
        <TableHead>
            <TableRow>
                <TableCell>First Name

                </TableCell>
                <TableCell>Middle Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Contact</TableCell>
                <TableCell>Alternate Number</TableCell>
                <TableCell>Country</TableCell>
                <TableCell>State</TableCell>
                <TableCell>City</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Id Proof</TableCell>
                <TableCell>District</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
{finalData.map((data)=>(<TableRow key={data.email}>
    <TableCell>First Name

                </TableCell>
                <TableCell>Middle Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Contact</TableCell>
                <TableCell>Alternate Number</TableCell>
                <TableCell>Country</TableCell>
                <TableCell>State</TableCell>
                <TableCell>City</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Id Proof</TableCell>
                <TableCell>District</TableCell>
</TableRow>))}
        </TableBody>
    </Table>
</TableContainer>
        </div>
    )
}

export default DisplayData