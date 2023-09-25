import { Badge, Stack } from '@mui/material'
import React from 'react'
import EmailIcon from '@mui/icons-material/Email';

const MuiBadge = () => {
    return (
        <>
            <Stack spacing={4} direction={'row'} mt={5} ml={5}>
                <Badge badgeContent={5} color='primary'>{/*5 is the badge & we can use it as notification*/}
                    <EmailIcon />
                </Badge>

                <Badge badgeContent={5} color='secondary'>
                    <EmailIcon />
                </Badge>

                <Badge badgeContent={100} color='primary'>
                    <EmailIcon />
                </Badge>
            </Stack>

            <p>zero badge value by default not displayed</p>
            <Stack spacing={4} direction={'row'} mt={5} ml={5}>
                <Badge badgeContent={0} color='secondary'>
                    <EmailIcon />
                </Badge>
            </Stack>

            <p>display zero badge value using prop</p>
            <Stack spacing={4} direction={'row'} mt={5} ml={5}>
                <Badge badgeContent={0} color='secondary' showZero>
                    <EmailIcon />
                </Badge>
            </Stack>

            <p>change default max value</p>
            <Stack spacing={4} direction={'row'} mt={5} ml={5}>
                <Badge badgeContent={500} color='primary' max={999}>
                    <EmailIcon />
                </Badge>
            </Stack>

            <p>variant dot & hide badge</p>
            <Stack spacing={4} direction={'row'} mt={5} ml={5}>
                <Badge variant='dot' color='primary'>
                    <EmailIcon />
                </Badge>
                <Badge variant='dot' color='primary' invisible={true}>
                    <EmailIcon />
                </Badge>
            </Stack>
        </>
    )
}

export default MuiBadge
