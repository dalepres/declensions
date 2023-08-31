import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';


export default function SimplePopper() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const popRef = React.useRef(undefined);
    var popColor = "green";
  
    const handleClick = (event) => {
      setAnchorEl(anchorEl ? null : popRef.current); //event.target); //popRef);
    };
  
    const open = Boolean(anchorEl);
    const id = open ? "simple-popper" : undefined;
  
    return (
      <div>
        <Stack>
          <button style={{borderRadius: '7px'}} type="button" onClick={handleClick}>
            Toggle Popper
          </button>
          <div>
            <fieldset style={{ marginTop: "0.5em", borderRadius: '10px' }}>
              <legend style={{ fontSize: "0.7em", marginBottom: "0" }}>
                First Name:
              </legend>
              <input
                type="text"
                className="exInput"
                style={{
                  marginBottom: "0.7em",
                  marginTop: "0",
                  border: "none",
                  outlineColor: "lightgray",
                  height: "1.5em",
                  width: "100%",
                  borderRadius: '5px'
                }}
                aria-describedby={id}
                ref={popRef}
              />
            </fieldset>
          </div>
          <Popper
            placement="bottom-start"
            id={id}
            open={open}
            anchorEl={anchorEl}
            position="Bottom"
          >
            <Box sx={{ bgcolor: "background.paper", color: popColor }}>
              The content of the Popper.
            </Box>
          </Popper>
        </Stack>
      </div>
    );
  }
  



export const ExercisesInput = (props) => {
    const useCase = props.useCase;
    const showAnswers = props.showAnswers;
    //alert(showAnswers);


    return (

        <Stack direction='column'  padding="3px">
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