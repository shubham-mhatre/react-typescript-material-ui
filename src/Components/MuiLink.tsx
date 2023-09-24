import { Stack,Link } from '@mui/material'
import React from 'react'


const MuiLink = () => {
  return (
    <Stack spacing={2} direction={'row'} m={4}>
      <Link href='#'>Home</Link>
      <Link href='#' color='secondary'>secondary</Link>
      <Link href='#' underline='hover'>Underline on hover</Link>
    </Stack>
  )
}

export default MuiLink
