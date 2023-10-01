import { Snackbar, Button } from '@mui/material'
import React, { useState } from 'react'


const MuiSnackbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Button onClick={() => setOpen(true)}>Submit</Button>
            <Snackbar autoHideDuration={2000} open={open} message="form submitted successfully !"
                onClose={() => setOpen(false)} />

        </>
    )
}

export default MuiSnackbar
