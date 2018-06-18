import React, { Component } from "react";
import Pictures from "./components/pictures";
import pictures from "./pictures.json";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Footer from "./components/footer";
import "./App.css";

class App extends Component {
  state = {
    pictures,
    score: 0,
    topScore: 0,
    idArray: []
  };

  // If they lose the game it will send an alert and set the score back to 0 and empty the array.  It will update the high score, if needed.
  endGameLose = () => {
    alert("Game Over.  Try again!");
    this.setState({ score: 0, idArray: [] });
    this.highScore();
  };

  // If they win the game it will reset the score but keep the high score at 12.
  endGameWin = () => {
    this.setState({ score: 0, topScore: 12, idArray: [] });
  };

  // This sets the high score
  highScore = () => {
    if (this.state.score > this.state.topScore) {
      this.setState({ topScore: this.state.score });
      // console.log("new high score");
    } else {
      this.setState({ topScore: this.state.topScore });
      // console.log("same high score");
    }
  };

  // Sets the pictures in a new random order each time a picture is clicked.
  randomize = () => {
    pictures.sort(function(a, b) {
      return 0.5 - Math.random();
    });
  };

  // When a picture is clicked...
  changeClickedStatus = id => {
    if (this.state.score < 11) {
      // if the score is less than 11 it will capture the current state and save it as "newState"
      let newState = { ...this.state };
      console.log("newState/State", newState);
      // it will capture the idArray and save it as "newArray"
      const newArray = this.state.idArray;
      console.log("newArray", newArray);
          // if the array includes the id of the picture the game will end because that means that picture has been clicked before
          if (newArray.includes(id)) {
            this.endGameLose();
          // Otherwise it will push the id into the array, increment the score by 1, randomize the pictures, and set the newState.
          } else {
            newArray.push(id);
            newState = {
              score: this.state.score + 1
            };

            this.randomize();
            this.setState(newState);
            // console.log("newState", newState);
          }
    // If the score is more than 11 it alerts the user that they won and runs the endGamewin function.
    }else {
      alert("You Win!");
      this.endGameWin();
    }
  };

  render() {
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
