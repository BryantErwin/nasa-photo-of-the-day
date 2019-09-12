import React from "react";
import "./App.css";
import NasaImg from './components/NasaImages/NasaImages'

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
        <h1>Nasa Photo Of The Day</h1>
        <NasaImg/>
    </div>
  );
}

export default App;
