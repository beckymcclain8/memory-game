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
    idArray: []
  };

  endGame = () => {

    // let endGameState = {
    //   score: 0,
    //   idArray: []
    // };



    // console.log("endGameState", endGameState);
    this.setState({score: 0, idArray: []});
    this.highScore();

  };

  highScore = () => {
    if(this.state.score > this.state.topScore) {
      this.setState({ topScore: this.state.score})
      console.log("new high score");
    } else {
    this.setState({ topScore: this.state.topScore})
    console.log("same high score");
    }
  }

  randomize = () => {
    pictures.sort(function(a, b) {
      return 0.5 - Math.random();
    });
  };

  changeClickedStatus = id => {
    let newState = { ...this.state };
    console.log("newState/State", newState);

    const newArray = this.state.idArray;
    console.log("newArray", newArray);

    if (newArray.includes(id)) {

      this.endGame();

    } else {
      newArray.push(id);
      
      newState = {
        score: this.state.score + 1,
      };

      this.setState(newState);
      console.log("newState", newState);
      this.randomize();
    }
  };

  render(props) {
    return (
      <div>
        <Navbar score={this.state.score} topScore={this.state.topScore} />
        <Header />
        {this.state.pictures.map(picture => (
          <Pictures
            id={picture.id}
            key={picture.id}
            image={picture.image}
            name={picture.name}
            clicked={picture.clicked}
            changeClickedStatus={this.changeClickedStatus}
          />
        ))}
        <Footer />
      </div>
    );
  }
}
export default App;
