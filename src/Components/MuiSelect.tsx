import React from 'react'
import { Box, TextField, MenuItem, Stack } from '@mui/material'
import { useState } from 'react'

const MuiSelect = () => {
    const [country, setCountry] = useState('');
    const [countries, setCountries] = useState<string[]>([]);
    
    console.log({ country });
    console.log({ countries });
    const handleSelectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCountry(event.target.value as string);
        
    }

    const handleMultiSelectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setCountries(typeof value === 'string' ? value.split(',') : value);
        console.log({ countries });
    }
    return (
        <Stack spacing={4}>
            <Stack spacing={2} direction={'row'}>
                <Box width='250px'>
                    <TextField select label="select country" fullWidth
                        value={country} onChange={handleSelectChange}>
                        <MenuItem value='IN'>India</MenuItem>
                        <MenuItem value='US'>USA</MenuItem>
                        <MenuItem value='EN'>Eng</MenuItem>
                    </TextField>
                </Box>
            </Stack>
            <Stack spacing={2} direction={'row'}>
            <Box width='250px'>
                    <TextField select label="select countries" fullWidth
                        SelectProps={{multiple:true}}
                        value={countries} onChange={handleMultiSelectChange}>
                        <MenuItem value='IN'>India</MenuItem>
                        <MenuItem value='US'>USA</MenuItem>
                        <MenuItem value='EN'>Eng</MenuItem>
                    </TextField>
                </Box>
            </Stack>
        </Stack>
    )
}

export default MuiSelect
