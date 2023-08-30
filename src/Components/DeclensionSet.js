import React, { useState } from 'react'
import { DeclensionItem } from './DeclensionItem'

export const DeclensionSet = (props) => {


    const showAnswers = props.showAnswers;
    //alert("in declensionset; showAnswers: " + showAnswers);

    return (
        <stack>
            <DeclensionItem 
                showAnswers={showAnswers} 
                useCase={'Nominative'}
            />
            <DeclensionItem 
                showAnswers={showAnswers} 
                useCase='Genitive' 
            />
            <DeclensionItem 
                showAnswers={showAnswers} 
                useCase='Dative' 
            />
            <DeclensionItem 
                showAnswers={showAnswers} 
                useCase='Accusative' 
            />
            <DeclensionItem 
                showAnswers={showAnswers} 
                useCase='Ablative' 
            />
            <DeclensionItem 
                showAnswers={showAnswers} 
                useCase='Vocative' 
            />
        </stack>
    )
}