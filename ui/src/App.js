import React, { Component } from "react";
import "./App.css";
import People from "./components/People/People";
import Gallery from "./components/Gallery/AllPictures";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>NeoWithNic GRANDstack Starter</h1>
        <h2>People Component </h2> 
        <People />
        <h2>Gallery Component</h2> */}
        <Gallery />
      </div>
    );
  }
}

export default App;
