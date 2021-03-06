import React, { Component } from "react";
import BeerList from "./components/BeerList";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="pos-f-t">
            <div className="collapse" id="navbarToggleExternalContent">
              <div className="bg-dark p-4">
                <h5 className="text-white h4">Collapsed content</h5>
                <span className="text-muted">Toggleable via the navbar brand.</span>
              </div>
            </div>
            <nav className="navbar navbar-dark bg-dark">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarToggleExternalContent"
                aria-controls="navbarToggleExternalContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
            </nav>
          </div>
          <BeerList/></div>
        </div>
      
    );
  }
}
export default App;
