import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import CarList from "./components/CarList";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              CAR LIST
            </Typography>
          </Toolbar>
        </AppBar>
        <CarList />
      </div>
    );
  }
}

export default App;
