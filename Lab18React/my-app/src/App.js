import './App.css';
import React from "react";
import  Greeting  from './components/greeting.js';
import Hello  from "./components/hello.js";
import img from "./components/img.jpg";
import five from "./components/five.jpg"

function App() {
  return (
    <div>    
      <Greeting image = {img} name = {'General Kenobi'}/>
      <Hello image = {five} name = {'Alex'} />
    </div>
  );
}

export default App;
