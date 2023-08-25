import React from 'react'
import { useState } from 'react'
import { Stack, TextField, InputAdornment } from '@mui/material'

const MuiTextbox = () => {
    const [value,setValue]=useState('');
    return (
        <Stack spacing={2}>
            <p>variant of textbox</p>
            <Stack direction={'row'} spacing={2}>
                <TextField label='Name' variant='outlined' />{/*variant outlined is default and primary color is default*/}
                <TextField label='Name' variant='filled' />
                <TextField label='Name' variant='standard' />
            </Stack>

            <p>color & size of textbox</p>
            <Stack direction={'row'} spacing={2}>
                <TextField label='small secondary' variant='outlined' size='small' color='secondary' />
            </Stack>

            <p>form input : required, helper text, disable, readOnly</p>
            <Stack direction={'row'} spacing={2}>
                <TextField label='form input' variant='outlined' size='small' required />{/*asterisk added after label by using required*/}
                <TextField label='password' variant='outlined' size='small' required type='password'
                    helperText='must contain 1 special char' />
                <TextField label='disable' variant='outlined' size='small' disabled />{/*disable*/}
                <TextField label='readOnly' variant='outlined' size='small' InputProps={{ readOnly: true }} />{/*readonly*/}
            </Stack>

            <p> adornment for prefix & suffix</p>
            <Stack direction={'row'} spacing={2}>
                <TextField label='Amount' variant='outlined' size='small' InputProps={{
                    startAdornment: <InputAdornment position='start'>$</InputAdornment>
                }} />

                <TextField label='Weight' variant='outlined' size='small' InputProps={{
                    endAdornment: <InputAdornment position='end'>KG</InputAdornment>
                }} />
            </Stack>

            <p> Error</p>
            <Stack direction={'row'} spacing={2}>
                <TextField label='password' variant='outlined' size='small' value={value} 
                onChange={(e)=>setValue(e.target.value)} 
                error={!value}
                helperText={!value ? 'Required' : 'Password must contain 1 special char'}/>
            </Stack>
        </Stack>
    )
}

export default MuiTextbox
