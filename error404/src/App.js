import React from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';import Button from "@material-ui/core/Button";
import HomeIcon from '@mui/icons-material/Home';
import IconButton from "@material-ui/core/IconButton";
import logo from './astro.png';
import background from './wallpaper.jpg';
import { withStyles } from "@material-ui/core/styles";
import './App.css';

const CustomButton1 = withStyles({
  root: {
    background: "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(107,9,121,1) 35%, rgba(104,9,119,1) 70%, rgba(0,0,0,1) 100%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: "1px 3px 34px 1px #790A91",
    marginRight: "50px",
  },
  label: {
    textTransform: "capitalize"
  },
})(props => <Button {...props} />);

const CustomButton2 = withStyles({
  root: {
    background: "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(107,9,121,1) 35%, rgba(104,9,119,1) 70%, rgba(0,0,0,1) 100%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: "1px 3px 34px 1px #790A91",
  },
  label: {
    textTransform: "capitalize"
  }
})(props => <Button {...props} />);

function App() {
  return (
    <div className="App">
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <div className="wallpaper" style={{ backgroundImage: `url(${background})`}}>
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="errorP">
          <span class="red">Error</span> 404
          </p>
          <div className="row">
            <CustomButton1 startIcon={<ArrowBackIosIcon/>}>GO BACK</CustomButton1>
            <CustomButton2 startIcon={<HomeIcon/>}>GO HOME</CustomButton2>
          </div>
        </header>   
      </div> 
    </div>
  );
}

export default App;
