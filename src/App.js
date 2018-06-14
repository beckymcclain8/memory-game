import React, { Component } from 'react';
import Pictures from "./components/pictures";
import pictures from "./pictures.json"
import Navbar from "./components/navbar";
import Header from "./components/header";
import Footer from "./components/footer";
// import Wrapper from "./components/Wrapper";

import './App.css'; 

// if/else statement if false game over, if true give a point
// click handler

const App = () => (
  <div>
    <Navbar/>
    <Header/>
    <Pictures
    image={pictures[0].image}
    />
    <Pictures
    image={pictures[1].image}
    />
    <Pictures
    image={pictures[2].image}
    />
    <Pictures
    image={pictures[3].image}
    />
    <Pictures
    image={pictures[4].image}
    />
    <Pictures
    image={pictures[5].image}
    />
    <Pictures
    image={pictures[6].image}
    />
    <Pictures
    image={pictures[7].image}
    />
    <Pictures
    image={pictures[8].image}
    />
    <Pictures
    image={pictures[9].image}
    />
    <Pictures
    image={pictures[10].image}
    />
    <Pictures
    image={pictures[11].image}
    />
    <Footer/>
  </div>
);
export default App;
