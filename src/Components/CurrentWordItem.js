import Typography from "@mui/material/Typography"

export  const CurrentWordItem = (props) => {
    const currentWord = props.currentWord;
    const showTranslation = props.wordSettings.showTranslation;

       return (
        <>
            <Typography>Current Word: 
                {currentWord.word}
            </Typography>
            {showTranslation ? 
                <Typography>
                    Translation: 
                    {currentWord.translation}
                </Typography> 
                : null 
            }
        </>
    )
};