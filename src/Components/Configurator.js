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
import Typography from "@mui/material/Typography";
import CheckBox from '@mui/material/Checkbox';


export const Configurator = () => {
    const handleSwitchChange = (event) => {
        setSwitchState({
            ...switchState,
            [event.target.id]: event.target.checked
        });
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
        <div className="Config-Screen" style={{
            padding: '4px',
            fontSize: '0.5em'
        }}>
            <Box
                border={'1px solid grey'}
            >
                <fieldset>
                    <legend style={{
                        fontSize: "14pt",
                        fontWeight: 'bold',
                        textAlign: 'left'
                    }}>
                        Practice Options:
                    </legend>
                    <fieldset>
                        <legend>Show which cases?</legend>
                        <table style={{ width: "100%" }}>
                            <tr style={{ width: "100%" }}>

                                <td style={{ textAlign: 'center' }} >
                                    <input
                                        type="radio"
                                        checked
                                        id="allSelected"
                                        name="showWhichCases"
                                        value="allSelected"
                                    />
                                    <label for="allSelected">All selected</label>
                                </ td>

                                <td style={{ textAlign: 'center', width: '50%' }} >
                                    <input
                                        type="radio"
                                        id="oneAtATime"
                                        name="showWhichCases"
                                        value="oneAtATime"
                                    />
                                    <label for="oneAtATime">
                                        One at a Time
                                    </label>
                                </ td>

                            </tr>
                        </ table>
                    </fieldset>
                    <fieldset>
                        <legend>Select case order:</legend>
                        <table style={{ width: "100%" }}>
                            <tr style={{ width: "100%" }}>
                                <td style={{ textAlign: 'center', width: '50%' }} >
                                    <input
                                        type="radio"
                                        checked
                                        id="bookOrder"
                                        name="caseOrder"
                                        value="bookOrder"
                                    />
                                    <label for="bookOrder">
                                        Book Order
                                    </label>
                                </ td>
                                <td style={{ textAlign: 'center' }} >
                                    <input
                                        type="radio"
                                        id="randomorder"
                                        name="caseOrder"
                                        value="randomorder"
                                    />
                                    <label for="randomorder">
                                        Random Order
                                    </label>
                                </ td>
                            </ tr>
                        </ table>
                    </fieldset>
                    <fieldset>
                        <legend>
                            Which cases to practice?
                        </legend>
                        <input 
                            type='checkbox' 
                            id='allCases' 
                            checked={switchState.allCases}
                            onChange={handleSwitchChange}
                        />
                        <label for='allCases'>
                            All Cases
                        </label>
                        <hr />
                        <table width='100%'>
                            <tr width='100%'>
                                <td width='50%' textAlign='left'>
                                    <input 
                                        type='checkbox' 
                                        id='nominative' 
                                        checked={switchState.nominative}
                                        onChange={handleSwitchChange}
                                    />
                                    <label for='nominative'>
                                        Nominative
                                    </label>
                                </td>
                                <td>
                                    <input 
                                        type='checkbox' 
                                        id='accusative' 
                                        checked={switchState.accusative}
                                        onChange={handleSwitchChange}
                                    />
                                    <label for='accusative'>
                                        Accusative
                                    </label>
                                </td>

                            </tr>
                            <tr>
                            <td width='50%' textAlign='left'>
                                    <input 
                                        type='checkbox' 
                                        id='genitive' 
                                        checked={switchState.genitive}
                                        onChange={handleSwitchChange}
                                    />
                                    <label for='genitive'>
                                        Genitive
                                    </label>
                                </td>
                                <td>
                                    <input 
                                        type='checkbox' 
                                        id='ablative' 
                                        checked={switchState.ablative}
                                        onChange={handleSwitchChange}
                                    />
                                    <label for='ablative'>
                                        Ablative
                                    </label>
                                </td>

                            </tr>
                            <tr>
                            <td>
                                <input 
                                        type='checkbox' 
                                        id='dative' 
                                        checked={switchState.dative}
                                        onChange={handleSwitchChange}
                                    />
                                    <label for='dative'>
                                        Dative
                                    </label>
                                </td>

                                <td>
                                    <input 
                                        type='checkbox' 
                                        id='vocative' 
                                        checked={switchState.vocative}
                                        onChange={handleSwitchChange}
                                    />
                                    <label for='vocative'>
                                        Vocative
                                    </label>
                                </td>
                            </tr>
                        </table>
                    </fieldset>
                    <fieldset>
                        <legend>Plurality:</legend>
                        <table style={{ width: "100%" }}>
                            <tr style={{ width: "100%" }}>

                                <td style={{ textAlign: 'center', width: '34%' }} >
                                    <input
                                        type="radio"
                                        checked
                                        id="single"
                                        name="plurality"
                                        value="single"
                                    />
                                    <label for="single">
                                        Single
                                    </label>
                                </ td>

                                <td style={{ textAlign: 'center', width: '33%' }} >
                                    <input
                                        type="radio"
                                        id="plural"
                                        name="plurality"
                                        value="plural"
                                    />
                                    <label for="plural">
                                        Plural
                                    </label>
                                </ td>

                                <td style={{ textAlign: 'center', width: '33%' }} >
                                    <input
                                        type="radio"
                                        id="both"
                                        name="plurality"
                                        value="both"
                                    />
                                    <label for="both">
                                        Both
                                    </label>
                                </ td>

                            </tr>
                        </ table>

                    </fieldset>
                    <fieldset>
                        <legend>New Word:</legend>
                        <table style={{ width: "100%" }}>
                            <tr style={{ width: "100%" }}>

                                <td style={{ textAlign: 'center', width: '34%' }} >
                                    <input
                                        type="radio"
                                        checked
                                        id="newEachDeclensionSet"
                                        name="newWord"
                                        value="newEachDeclensionSet"
                                    />
                                    <label for="newEachDeclensionSet">
                                        After Case Set
                                    </label>
                                </ td>

                                <td style={{ textAlign: 'center', width: '33%' }} >
                                    <input
                                        type="radio"
                                        id="newWordEachScreen"
                                        name="newWord"
                                        value="newWOrdEachScreen"
                                    />
                                    <label for="newWordEachScreen">
                                        Each Screen
                                    </label>
                                </ td>

                                <td style={{ textAlign: 'center', width: '33%' }} >
                                    <input
                                        type="radio"
                                        id="onRequestOnly"
                                        name="newWord"
                                        value="onRequestOnly"
                                    />
                                    <label for="onRequestOnly">
                                        On Request Only
                                    </label>
                                </ td>

                            </tr>
                        </ table>
                        <hr />
                        <label for='wordcount' style={{marginRight: '1em'}}>Number of words per session:</label>
                        <input type='number' id='wordcount' min='1' max='50' />
                    </fieldset>

                </fieldset>
{/*

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
                */}

            </Box>
        </div >
    )
}