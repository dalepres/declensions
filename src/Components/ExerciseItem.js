import { DeclensionSet } from "./DeclensionSet"
import { CurrentWordItem } from "./CurrentWordItem";
import Button from '@mui/material/Button';
import React, { useState } from 'react'


export const ExerciseItem = (exerciseItemSettings) => {

    //wordSettings = props.exerciseItemSettings.wordSettings;

    const wordSettings = { showTranslation:  true };
    const currentWord = { word: 'tempus', translation: 'time', declension: '3c', gender: 'n' };
    const declensionList = ["nominative", "genitive", "ablative"]

    const [showAnswers, setShowAnswers] = useState(false);
                                 
    const showHideAnswers = () => {
        setShowAnswers(!showAnswers);
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
            />
            <div style={{textAlign:'center'}}><Button size="small" 
            variant="contained" 
            onClick={showHideAnswers}>{showAnswers ? "Hide " : "Show "}<br/>Answers
            </Button></div>
        </>
    )
}

