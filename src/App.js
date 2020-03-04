import React from "react";
import "./App.css";
import CardMaker from './components/CardMaker';
import Date from './components/Date';

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <CardMaker />
      <Date />
    </div>
  );
}

export default App;
