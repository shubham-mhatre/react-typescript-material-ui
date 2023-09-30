import { Stack, Alert,AlertTitle,Button } from '@mui/material'
import React from 'react'


const MuiAlert = () => {
  return (
    <Stack spacing={2} sx={{width:"80%", marginLeft:"10%", marginRight:"10%", marginTop:"5%"}}>
        <Alert severity='error'>This is error alert</Alert>
        <Alert severity='warning'>This is warning alert</Alert>
        <Alert severity='info'>This is info alert</Alert>
        <Alert severity='success'>This is success alert</Alert>

        <Alert variant='outlined' severity='error'>This is error alert</Alert>
        <Alert variant='outlined' severity='warning'>This is warning alert</Alert>
        <Alert variant='outlined' severity='info'>This is info alert</Alert>
        <Alert variant='outlined' severity='success'>This is success alert</Alert>

        <Alert variant="filled" severity='error'>This is error alert</Alert>
        <Alert variant="filled" severity='warning'>This is warning alert</Alert>
        <Alert variant="filled" severity='info'>This is info alert</Alert>
        <Alert variant="filled" severity='success'>This is success alert</Alert>    

        <p>Alert title</p>  
        <Alert variant="filled" severity='error' onClose={()=>alert('closed clicked')}>
            <AlertTitle>Error</AlertTitle>
            This is error alert
        </Alert>
        <Alert variant="filled" severity='warning'>
            <AlertTitle>warning</AlertTitle>
            This is warning alert
        </Alert>
        <Alert variant="filled" severity='info'>
            <AlertTitle>Info</AlertTitle>
            This is info alert
        </Alert>
        <Alert variant="filled" severity='success' 
        action={<Button color='inherit'>Undo</Button>}>
            <AlertTitle>Success</AlertTitle>
            This is success alert
        </Alert>
    </Stack>
  )
}

export default MuiAlert
