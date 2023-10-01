import { CircularProgress,LinearProgress } from '@mui/material'
import React from 'react'


const MuiProgress = () => {
  return (
    <>
    <p>circular progress</p>
    <CircularProgress />
    <p>color success</p>
    <CircularProgress color='success'/>
    <p>variant determinate with value 70%</p>
    <CircularProgress variant='determinate' value={70}/>

    <p>Linear progress</p>
    <LinearProgress />
    <p>color success</p>
    <LinearProgress color='success'/>
    <p>variant determinate with value 70%</p>
    <LinearProgress variant='determinate' value={70}/>
      
    </>
  )
}

export default MuiProgress
