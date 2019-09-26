import React, { Component } from "react";
import "./App.css";
import People from "./components/People/People";
import Gallery from "./components/Gallery/AllPictures";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>NeoWithNic GRANDstack Starter</h1>
        {/* <People /> */}
        <Gallery />
      </div>
    );
  }
}

export default App;
