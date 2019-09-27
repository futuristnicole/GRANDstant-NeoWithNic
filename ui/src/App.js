import React, { Component } from "react";
import "./App.css";
import People from "./components/People/People";
import Gallery from "./components/Gallery/AllPictures";
import AddPhoto from './components/PhotoForm/PhotoForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>NeoWithNic GRANDstack Starter</h1>
        <h2>People Component </h2> 
        <People /><hr></hr> <br></br> <br></br>
        <h2>Gallery Component</h2> 
        <Gallery /> <hr></hr> <br></br> <br></br>
        <h2>Add a Photo Component</h2> 
        <AddPhoto />
        <br></br> <br></br>
      </div>
    );
  }
}

export default App;
