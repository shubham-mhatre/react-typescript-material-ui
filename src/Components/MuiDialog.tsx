import { Button,Dialog,DialogTitle,DialogContent,
    DialogContentText,DialogActions } from '@mui/material'
import React,{useState} from 'react'


const MuiDialog = () => {
    const[open,setOpen]=useState(false);
  return (
    <>
    <Button onClick={()=>setOpen(true)}>Submit</Button>
    <Dialog open={open}>
    <DialogTitle>Submit form?</DialogTitle>
    <DialogContent>
        <DialogContentText>are you sure you want to submit the form?</DialogContentText>
    </DialogContent>
    <DialogActions>
        <Button onClick={()=>setOpen(false)}>Submit</Button>
        <Button onClick={()=>setOpen(false)}>cancel</Button>
    </DialogActions>
    </Dialog>
      
    </>
  )
}

export default MuiDialog
