import React from 'react';
import './App.css';
import Todolist from './Todolist';
import {Timer, Clock} from './Timer';

function App() {
  let name ="React";
  return (
    <div className="container">
      <Todolist />
      <Timer />
      <Clock />
    </div>
  );
}



export default App;
