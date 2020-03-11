import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./style/main.sass";
import Headbar from "./components/Headbar";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Headbar className="titlebar" />
        <div>
          <h1>Hallo</h1>
        </div>
      </React.Fragment>
    );
  }
}

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<App />, wrapper) : false;