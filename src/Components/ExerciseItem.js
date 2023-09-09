import { DeclensionSet } from "./DeclensionSet";
import { CurrentWordItem } from "./CurrentWordItem";
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import Stack from '@mui/material/Stack'


export const ExerciseItem = (props) => {

    const currentWord = props.currentWord;
    const wordSettings = props.wordSettings;
    const declensionList = props.declensionList;

    const [showAnswers, setShowAnswers] = useState(false);
    const [wordIndex, setWordIndex] = useState(1);
    const getPreviousWord = wordSettings.getPreviousWord;
    const getNextWord = wordSettings.getNextWord;

    const showHideAnswers = () => {
        setShowAnswers(!showAnswers);
    }

    const showPreviousWord = () => {
        getPreviousWord();
    }

    const showNextWord = () => {
        getNextWord();
    }


        return (
        <>
            <CurrentWordItem
                currentWord={currentWord}
                wordSettings={wordSettings}
            />
            <DeclensionSet
                declensionList={declensionList}
                showAnswers={showAnswers}
                currentWord = {currentWord}
            />
            <div style={{width: '100%', textAlign: 'center', marginTop: '0.5em'}}>
                <span style={{marginRight: '0.5em'}}>
                <Button 
                    sx= {{fontSize: '10px;'}}
                    size="small"
                    variant="contained"
                    onClick={showPreviousWord}>
                        Previous<br />word
                </Button></span>
                <span>
                <Button 
                    sx= {{fontSize: '10px;'}}
                    size="small"
                    variant="contained"
                    onClick={showHideAnswers}>
                        {showAnswers ? "Hide " : "Show "}<br />Answers
                </Button></span>
                <span style={{marginLeft: '0.5em'}}><Button 
                    sx= {{fontSize: '10px;'}}
                    size="small"
                    variant="contained"
                    onClick={showNextWord}>
                        Next<br />Word
                </Button></span>
            </div>
        </>
    )
}

