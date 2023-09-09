import React, { useState } from 'react';
import { DeclensionItem } from './DeclensionItem';
import { ExerciseInput } from './ExerciseInput';
import Stack from '@mui/material/Stack';

export const DeclensionSet = (props) => {


    const showAnswers = props.showAnswers;
    const currentWord = props.currentWord;
    
    return (
        <Stack>
            <ExerciseInput
                showAnswers={showAnswers} 
                useCase={'Nominative'}
                currentWord={currentWord}
            />
            <ExerciseInput 
                showAnswers={showAnswers} 
                useCase='Genitive' 
                currentWord={currentWord}
            />
            <ExerciseInput 
                showAnswers={showAnswers} 
                useCase='Dative' 
                currentWord={currentWord}
            />
            <ExerciseInput 
                showAnswers={showAnswers} 
                useCase='Accusative' 
                currentWord={currentWord}
            />
            <ExerciseInput 
                showAnswers={showAnswers} 
                useCase='Ablative' 
                currentWord={currentWord}
            />
            <ExerciseInput 
                showAnswers={showAnswers} 
                useCase='Vocative' 
                currentWord={currentWord}
            />
        </Stack>
    )
}