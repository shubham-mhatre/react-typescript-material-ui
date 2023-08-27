import React from 'react'
import { Stack, Box, FormControlLabel, Checkbox, FormControl, FormLabel, FormGroup } from '@mui/material'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useState } from 'react'

const MuiCheckBox = () => {
    const [acceptTc, setAcceptTC] = useState(false);
    const [skill, setSkills] = useState<string[]>([]);

    console.log({ acceptTc });
    console.log({ skill });

    const handleChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAcceptTC(event.target.checked);
    }

    const handleSkillsChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
        const index = skill.indexOf(event.target.value);
        if(index === -1){
            setSkills([...skill,event.target.value])
        }else{
            setSkills(skill.filter((sk=>sk!==event.target.value)))
        }
    }

    return (
        <Stack spacing={4}>
            <Stack spacing={2} direction={'row'}>
                <Box>
                    <FormControlLabel label='I accept terms & conditions'
                        control={<Checkbox checked={acceptTc} onChange={handleChecked} />} />

                </Box>
            </Stack>

            {/* checked using icon */}
            <Stack spacing={2} direction={'row'}>
                <Box>
                    <Checkbox icon={<BookmarkBorderIcon />} checkedIcon={<BookmarkIcon />}
                        checked={acceptTc} onChange={handleChecked} />
                </Box>
            </Stack>

            {/* checkbox as group */}
            <Stack spacing={2} direction={'row'}>
                <Box>
                    <FormControl>
                        <FormLabel>Skills</FormLabel>
                        <FormGroup row>
                            <FormControlLabel 
                                label="HTML"
                                control={<Checkbox value='html' 
                                    checked={skill.includes('html')} 
                                    onChange={handleSkillsChecked}/>}
                            />
                            <FormControlLabel 
                                label="CSS"
                                control={<Checkbox value='css' 
                                    checked={skill.includes('css')} 
                                    onChange={handleSkillsChecked}/>}
                            />
                            <FormControlLabel 
                                label="Javascript"
                                control={<Checkbox value='javascript' 
                                    checked={skill.includes('javascript')} 
                                    onChange={handleSkillsChecked}/>}
                            />
                        </FormGroup>
                    </FormControl>
                </Box>
            </Stack>
        </Stack>
    )
}

export default MuiCheckBox
