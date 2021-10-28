import * as React from 'react';
import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { withStyles } from "@material-ui/styles";
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import Swal from 'sweetalert2'


const CustomButton1 = withStyles({
  root: {
    background: "transparent",
    borderRadius: 11,
    border: "2px solid #790A91",
    color: "black",
    fontSize: "25px",
    fontWeight: "bold",
    fontFamily: "'Raleway','sans-serif'",
    height: 48,
    width: "125px",
    alignContent: "center",
    margin: "auto"
  },
  label: {
    textTransform: "capitalize"
  },
})(props => <Button {...props} />);

const handleSubmit = (event) => {
  event.preventDefault();
  Swal.fire({title: 'COOL!', 
             text: 'FORM HAS BEEN SENT SUCCESFULLY',   
             icon: 'success',        
             confirmButtonText: 'OKEY!'});
}

function App() {
  const [username, setUsername] = React.useState("")
  const [password, setPassword] = React.useState("")
  return (
    <div className="App">
      <form className="App-header" onSubmit={handleSubmit}>
        <Grid container justify="center" alignItems="center" ml={20}>
          <Grid item xs={6} style={{ textAlign: 'left' }}>
            <h1 className="header-1">FORMS <br /> WITH <br /> REACT</h1>
          </Grid>
          <Box sx={{ display: 'grid', gridTemplateRows: 'repeat(3, 1fr)', gridGap: '30px' }}>
            <TextField className="t1" id="outlined-basic" value={username} onChange={(e) => setUsername(e.target.value)} type="text" label="USER" variant="outlined" required />
            <TextField className="t1" id="outlined-basic" value={password} onChange={(e) => setPassword(e.target.value)} type="password" label="PASSWORD" variant="outlined" required />
            <CustomButton1 variant="outlined" type="submit">SUBMIT</CustomButton1>
          </Box>
        </Grid>
      </form>
    </div>
  );
}

export default App;
