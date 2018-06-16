import React, { Component } from "react";
import Pictures from "./components/pictures";
import pictures from "./pictures.json";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Container from "./components/container";
import Footer from "./components/footer";
// import Wrapper from "./components/Wrapper";

import "./App.css";

// if/else statement if false game over, if true give a point
// click handler
//  let score = 0;
//  let topScore = 0;

class App extends Component {
  state = {
    pictures,
    clicked: false,
    score: 0,
    topScore: 0
  };

// endGame = () => {

// };

randomize

changeClickedStatus= id => {

  let newState = { ...this.state };

  console.log("newState", newState);

  if (newState.clicked === false) {
    let newState = {
    score: this.state.score + 1,
    topScore: this.state.topScore + 1,
    clicked: true
    }   
    this.setState(newState);
    console.log(newState);
  } 
  else {
    // endGame();
    console.log("Didn't work");
  }
  
 
};

  render(props) {
    return (
      <div>
        <Navbar />
        <Header />
        {/* <Container> */}
        {this.state.pictures.map(picture => (
          <Pictures 
          id={picture.id}
          key={picture.id}
          image={picture.image} 
          name={picture.name}
          clicked={picture.clicked}
          // data-value="false"
          changeClickedStatus={this.changeClickedStatus}
          // onClick={() => props.changeClickedStatus(props.id)}
          />
        ))}
        {/* </Container> */}
        <Footer />
      </div>
    );
  }
}
export default App;
