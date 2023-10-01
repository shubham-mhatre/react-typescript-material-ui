import { LoadingButton } from '@mui/lab'
import { Stack } from '@mui/material'

import React from 'react'


const MuiLoadingButton = () => {
    return (
        <Stack spacing={2} direction={'row'} mt={5} ml={5}>
            <LoadingButton variant='outlined'>fetch data</LoadingButton>
            <LoadingButton loading variant='outlined'>fetch data</LoadingButton>

            <LoadingButton variant='outlined' loadingIndicator="Loading...">
                fetch data
            </LoadingButton>
            <LoadingButton loading variant='outlined' loadingIndicator="Loading..."
            style={{"lineHeight":"1px"}}>
                fetch data
            </LoadingButton>
        </Stack>
    )
}

export default MuiLoadingButton
