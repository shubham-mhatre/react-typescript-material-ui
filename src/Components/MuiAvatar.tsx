import { Stack, Avatar, AvatarGroup } from '@mui/material'
import React from 'react'

const MuiAvatar = () => {
    return (
        <Stack spacing={4} mt={10} ml={10}>
            <Stack direction='row' spacing={1}>
                <Avatar>SM</Avatar>
                <Avatar>SS</Avatar>
            </Stack>

            <Stack direction='row' spacing={1}>
                <Avatar sx={{ bgcolor: 'primary.light' }}>SM</Avatar>
                <Avatar sx={{ bgcolor: 'success.light' }}>SS</Avatar>
            </Stack>

            <Stack direction='row' spacing={1}>
                <Avatar src='https://randomuser.me/api/portraits/men/51.jpg' alt='john doe' />
                <Avatar src='https://randomuser.me/api/portraits/men/52.jpg' alt='john doe' />
            </Stack>

            <p>avatar group</p>
            <Stack direction='row' spacing={1}>
                <AvatarGroup>
                    <Avatar sx={{ bgcolor: 'primary.light' }}>SM</Avatar>
                    <Avatar sx={{ bgcolor: 'success.light' }}>SS</Avatar>
                    <Avatar src='https://randomuser.me/api/portraits/men/51.jpg' alt='john doe' />
                    <Avatar src='https://randomuser.me/api/portraits/men/52.jpg' alt='john doe' />
                </AvatarGroup>
            </Stack>

            <p>max prop</p>
            <Stack direction='row' spacing={1}>
                <AvatarGroup max={3}>
                    <Avatar sx={{ bgcolor: 'primary.light' }}>SM</Avatar>
                    <Avatar sx={{ bgcolor: 'success.light' }}>SS</Avatar>
                    <Avatar src='https://randomuser.me/api/portraits/men/51.jpg' alt='john doe' />
                    <Avatar src='https://randomuser.me/api/portraits/men/52.jpg' alt='john doe' />
                </AvatarGroup>
            </Stack>

        </Stack>
    )
}

export default MuiAvatar
