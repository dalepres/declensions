import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';


export const DeclensionItem = (props) => {
    const useCase = props.useCase;
    const showAnswers = props.showAnswers;

    return (

        <Stack>
            <Tooltip 
              id={useCase} 
              title={useCase} 
              open={showAnswers}
              placement="left"
            >
                <TextField sx={{width: "200px;"}}
                    label={useCase + ":"}
                    size="small"
                />
            </Tooltip>
            
        </Stack>
    )
}