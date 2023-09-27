import {
    Box, List, ListItem, ListItemText, ListItemIcon, ListItemAvatar, Avatar,
    ListItemButton, Divider
} from '@mui/material'
import MailIcon from '@mui/icons-material/Mail'
import React from 'react'


const MuiList = () => {
    const data = [{
        'listText': "List Item 1",
        'secondaryText': "secondary text1"
    }, {
        'listText': "List Item 2",
        'secondaryText': "secondary text2"
    }, {
        'listText': "List Item 3",
        'secondaryText': "secondary text3"
    }];
    return (
        <Box sx={{ width: '400px', bgcolor: '#efefef', mt: '50px', ml: '50px' }}>
            
            {data.map((rs) => (
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <ListItemAvatar>
                                    <Avatar>
                                        <MailIcon />
                                    </Avatar>
                                </ListItemAvatar>
                            </ListItemIcon>
                            <ListItemText primary={rs.listText} secondary={rs.secondaryText} />
                        </ListItemButton>
                    </ListItem>
                <Divider/>
                </List>
            ))}

        </Box>
    )
}

export default MuiList
