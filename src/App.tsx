import React from 'react';
import './App.css';
import Todolist from './Todolist';
import {Timer, Clock} from './Timer';
import MyWeather from './MyWeather';

function App() {
  let name ="React";
  return (
    <div className="container">
      <Todolist />
      <Timer />
      <Clock />
      <MyWeather weather="맑음" >
        오늘은 화창한 날씨입니다.
      </MyWeather>

    </div>
  );
}



export default App;
