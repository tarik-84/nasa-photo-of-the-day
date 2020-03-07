import React from "react";
import "./App.css";
import CardMaker from './components/CardMaker';
import Date from './components/Date';
import NavBar from "./components/NavBar";



function App() {
  return (
    <div className="App">
      <NavBar />
      <CardMaker />
      <Date />
      <footer>
        <p>Copyright Official NASA! 2020</p>
      </footer>
    </div>
  );
}

export default App;
