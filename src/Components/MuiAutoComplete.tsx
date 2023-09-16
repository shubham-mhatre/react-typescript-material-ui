import React, { useState } from 'react'
import { Stack, Autocomplete, TextField } from '@mui/material'

const skills = ['html', 'javascript', 'typescript', 'java'];
const MuiAutoComplete = () => {
    
    const [value, setValue] = useState<string | null>(null);
    console.log({value});
    return (
        <Stack spacing={2}>
            <Autocomplete
                options={skills}
                renderInput={(params) => <TextField {...params} label="skills" />}
                value={value}
                onChange={(event: any, newValue: string | null) => setValue(newValue)} 
                freeSolo/> {/*with this we can add value those are not present in options*/} 

        </Stack>
    )
}

export default MuiAutoComplete
