import React, { Component } from "react";
import Pictures from "./components/pictures";
import pictures from "./pictures.json";
import Navbar from "./components/navbar";
import Header from "./components/header";
// import Container from "./components/container";
import Footer from "./components/footer";
// import Wrapper from "./components/Wrapper";

import "./App.css";

class App extends Component {
  state = {
    pictures,
    score: 0,
    topScore: 0,
    idArray: [],
  };

endGame = () => {
alert("GAME OVER!");
let startOver = {
  score: 0,
  topScore: 0,
  idArray: []
};

this.setState(startOver);
console.log("startOver", startOver);
};

randomize= () => {
pictures.sort(function(a, b){return 0.5 - Math.random()});
};

changeClickedStatus= id => {

  let newState = { ...this.state };
  console.log("newState", newState);

  const newArray = this.state.idArray;
  console.log("newArray", newArray);

  // if (newArray.includes(id)) {
  //   console.log("id", id);
  //   this.endGame()
  // } else {
  //   newState = {
  //     score: this.state.score + 1,
  //     topScore: this.state.topScore + 1,
  //       }   
  
  //     this.setState(newState);
  //     console.log("newState", newState);
  //     this.randomize();
  // }
  newArray.includes(id)
    ? this.endGame()

    : newArray.push(id);
    
    newState = {
    score: this.state.score + 1,
    topScore: this.state.topScore + 1,
      }   

    this.setState(newState);
    console.log("newState", newState);
    this.randomize();
   
  } 

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
