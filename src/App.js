import React, { Component } from "react";
import "./App.css";
import Signin from "./components/Signin/Signin";
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>

        
        <div className="App">
          <Signin />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
