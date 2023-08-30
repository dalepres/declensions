import * as React from "react";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Accordian from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormGroup from '@mui/material/FormGroup';
import Switch from '@mui/material/Switch';
import Divider from '@mui/material/Divider';
import FormHelperText from '@mui/material/FormHelperText';

import { Typography } from "@mui/material"


export const Configurator = () => {
    const handleSwitchChange = (event) => {
        setSwitchState({
            ...switchState,
            [event.target.name]: event.target.checked
        });
        alert(event.target.checked); 
        //: event.target.checked});
    }

    const [switchState, setSwitchState] = React.useState({
        allCases: false,
        nominative: false,
        genitive: true,
        dative: true,
        accusative: true,
        ablative: true,
        vocative: false
    });



        return (
            <div style={{ padding: '10px' }}>
                <Box
                    border={'1px solid grey'}
                    width='275px'
                >
                    <FormGroup>
                        <FormControl>
                            <FormLabel id='practice-session-options'>
                                Practice Session Options
                            </FormLabel>
                            <FormControlLabel
                                control={
                                    <Switch
                                        checked={switchState.allCases}
                                        onChange={handleSwitchChange}
                                        name="allCases"
                                    />
                                }
                                label="All Cases"
                            />
                        </FormControl>
                    </FormGroup>
                    <Divider />
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={switchState.nominative}
                                    onChange={handleSwitchChange}
                                    name="nominative"
                                />
                            }
                            label="Nominative"
                        />
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={switchState.genitive}
                                    onChange={handleSwitchChange}
                                    name="genitive"
                                />
                            }
                            label="Genitive"
                        />
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={switchState.dative}
                                    onChange={handleSwitchChange}
                                    name="dative"
                                />
                            }
                            label="Dative"
                        />
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={switchState.accusative}
                                    onChange={handleSwitchChange}
                                    name="accusative"
                                />
                            }
                            label="Accusative"
                        />
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={switchState.ablative}
                                    onChange={handleSwitchChange}
                                    name="ablative"
                                />
                            }
                            label="Ablative"
                        />
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={switchState.vocative}
                                    onChange={handleSwitchChange}
                                    name="vocative"
                                />
                            }
                            label="Vocative"
                        />
                    </FormGroup>
                    <FormHelperText>Gettin' Rich</FormHelperText>
                    <Divider />
                    <Accordian>
                        <AccordionSummary
                            id='wordList'
                            aria-controls='wordListContent'
                            expandIcon={<ExpandMoreIcon />}
                        >
                            <Typography>Word List</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>Add some stuff to accordion</Typography>
                        </AccordionDetails>
                    </Accordian>

                </Box>
            </div >
        )
    }