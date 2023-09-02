import React, { useState } from 'react';
import { DeclensionItem } from './DeclensionItem';
import { ExerciseInput } from './ExerciseInput';
import Stack from '@mui/material/Stack';

export const DeclensionSet = (props) => {


    const showAnswers = props.showAnswers;

    return (
        <Stack>
            <ExerciseInput
                showAnswers={showAnswers} 
                useCase={'Nominative'}
            />
            <ExerciseInput 
                showAnswers={showAnswers} 
                useCase='Genitive' 
            />
            <ExerciseInput 
                showAnswers={showAnswers} 
                useCase='Dative' 
            />
            <ExerciseInput 
                showAnswers={showAnswers} 
                useCase='Accusative' 
            />
            <ExerciseInput 
                showAnswers={showAnswers} 
                useCase='Ablative' 
            />
            <ExerciseInput 
                showAnswers={showAnswers} 
                useCase='Vocative' 
            />
        </Stack>
    )
}