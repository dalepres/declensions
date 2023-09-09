import { ExerciseItem } from "./ExerciseItem"
import { GetWord } from './WordList';
import { useState } from 'react';

export const Exercise = () => {
    const [wordIndex, setWordIndex] = useState(1); 
    const [currentWord, setCurrentWord] = useState(
        { 
            word: 'frūctus', 
            translation: 'fruit, profit,benefit, enjoyment', 
            declension: '4', 
            gender: 'n',
            Nominative: 'frūctus',
            Genitive: 'frūctūs',
            Dative: 'frūctuī',
            Accusative: 'frūctum',
            Ablative: 'frūctū',
            Vocative: 'frūctus'
        }
    );

    const getPreviousWord = () => {
        if (wordIndex > 1) {
            setWordIndex(wordIndex - 1);
        }else{
            setWordIndex(16);
        }
        GetAnotherWord(wordIndex);
    }

    const getNextWord = () => {
        if (wordIndex < 16) {
            setWordIndex(wordIndex + 1);
        }else{
            setWordIndex(1);
        }
        GetAnotherWord(wordIndex);
    }


    function GetAnotherWord(wordIndex) {
        let newWord = GetWord(wordIndex);
        alert("newWord=" + newWord);
        let wordObject = getWordFromArray(newWord);
        setCurrentWord(wordObject);
    }

    function getWordFromArray(newWord)  {
        return {
            word: newWord[0],
            translation: newWord[1],
            declension: '1',
            gender: 'f',
            Nominative: newWord[2],
            Genitive: newWord[3],
            Dative: newWord[4],
            Accusative: newWord[5],
            Ablative: newWord[6],
             Vocative: newWord[7]
        }
    }
    /*
    ["puella","girl","puella","puellae","puellae","puellam","puella","puellae"],
    ["rosa","rose","rosa","rosae","rosae","rosam","rosa","rosae"],
    ["porta","gate","porta","portae","portae","portam","porta","portae"],
    ["nauta","sailor","nauta","nautae","nautae","nautam","nauta","nautae"],

    */

    const wordSettings = { 
        setWordIndex: setWordIndex,
        getNextWord: getNextWord,
        getPreviousWord: getPreviousWord,
        showTranslation:  true, 
        wordIndex: wordIndex,
    };

/*
    const currentWord = { 
        word: 'frūctus', 
        translation: 'fruit, profit,benefit, enjoyment', 
        declension: '4', 
        gender: 'n',
        Nominative: 'frūctus',
        Genitive: 'frūctūs',
        Dative: 'frūctuī',
        Accusative: 'frūctum',
        Ablative: 'frūctū',
        Vocative: 'frūctus'
    };
*/

    const declensionList = ["nominative", "genitive", "ablative"]

    return (

        <ExerciseItem
            wordSettings={wordSettings}
            currentWord={currentWord}
            declensionList={declensionList}
        />
    )
}