import React from "react";
import CalendarBody from "./components/Calendar/CalendarBody";
import CalendarForm from './components/Calendar/Form'
import "./App.css";

function App() {

  // state should be declared at the parent level,
  // could use useContext with a reducer but there's little point

  return (
    <div className="App">
      <CalendarBody />
      <CalendarForm />
    </div>
  );
}

export default App;
