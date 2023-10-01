import { Stack,Skeleton } from '@mui/material'
import React from 'react'


const MuiSkeleton = () => {
    return (
        <>
            <Stack spacing={1} sx={{alignContent:'center'}}>
                {/* For variant="text", adjust the height via font-size */}
                <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={100}/>

                {/* For other variants, adjust the size with `width` and `height` */}
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton variant="rectangular" width={210} height={60} animation="wave"/>
                <Skeleton variant="rounded" width={210} height={60} />
            </Stack>
        </>
    )
}

export default MuiSkeleton
