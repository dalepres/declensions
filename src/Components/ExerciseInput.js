import React from 'react';
import Popper from '@mui/material/Popper';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

export const ExerciseInput = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const popRef = React.useRef(undefined);
    var [popColor, setPopColor] = React.useState('red');
    const useCase = props.useCase;
    const showAnswers = props.showAnswers;

    const [inputValue, setInputValue] = React.useState('');
    const currentWord = props.currentWord;

    const handleInputChange = (event) => {
        setInputValue(event.target.value);

        popColor = 
            currentWord[useCase] === popRef.current.value.toLowerCase()
            ? setPopColor('green')
            : setPopColor('red');
    }

    const open = showAnswers;
    const id = open ? "pop-" + useCase : undefined;

    return (
        <div>
            <Stack>
                <div>
                    <fieldset 
                        style={{ 
                            marginTop: "0.2em", 
                            borderRadius: '6px',
                            textAlign: 'center',
                            padding: '0'
                    }}
                    >
                        <legend style={{ 
                            fontSize: "11pt",
                            fontWeight: 'bold',
                            textAlign: 'left' }}>
                            {useCase}:
                        </legend>
                        <input
                            id={'declension-' + useCase}
                            type="text"
                            style={{
                                marginBottom: "1.5em",
                                border: "none",
                                outlineColor: "lightgray",
                                height: "1.25em",
                                width: "95%",
                                borderRadius: '5px',
                                fontSize: '12pt'
                            }}
                            onChange={handleInputChange}
                            onkeypress = "this.onchange();"
                            onpaste = "this.onchange();"
                            oninput = "this.onchange();"
                            aria-describedby={id}
                            ref={popRef}
                        />
                    </fieldset>
                </div>
                <Popper
                    placement="bottom-start"
                    id={id}
                    open={open}
                    anchorEl={popRef.current}
                    position="Bottom"
                >
                    <Box sx={{ bgcolor: "background.paper", color: popColor }}>
                        {currentWord[useCase]}
                    </Box>
                </Popper>
            </Stack>
        </div>
    );
}
