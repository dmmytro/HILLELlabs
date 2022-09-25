import './App.css';
import React from "react";

import { Greeting } from './components/Greeting.js';
import Hello from "./components/Hello.js";
import ListOfPeople from './components/ListOfPeople';
import HomeElement from './components/HomeElement';
import img from "./components/img.jpg";
import five from "./components/five.jpg"
import stars from "./components/fallenStars.jpg"

import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";


function App() {
  return (
    render(

      <div className='App'>
        <header className='App-header'>
          <BrowserRouter>
            <Link to="/">Home</Link>
            <Link to="hello">Hello</Link>
            <Link to="greetig" >Greeting</Link>
            <Link to="listofpeople">List Of People</Link>
            <Routes>
              <Route path="/" element={<HomeElement image={stars} />}>
                <Route path="hello" element={<Hello image={five} name={'Alex'} />} />
                <Route path="greeting" element={<Greeting image={img} name={'General Kenobi'} />} />
                <Route path="listofpeople" element={<ListOfPeople />} />
              </Route>
            </Routes>
          </BrowserRouter>

          {/*  <React.Fragment>
          <Greeting image={img} name={'Young user'} />
          <Hello image={five} name={'Alex'} />
          <ListOfPeople />
        </React.Fragment>  */}
        </header>
      </div>

)
  );
  

}

export default App;