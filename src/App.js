import React from "react";
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import patterns from "./patterns.json";
import "./App.css";

let currentScore = 0;
let bestScore = 0;
let clickMessage = "Click on any image to earn points, but careful not to click on any more than once!";

class App extends React.Component {

  state = {
    patterns,
    currentScore,
    bestScore,
    clickMessage
  };

  setClicked = id => {

        const patterns = this.state.patterns;

        // Filter for the clicked pattern
        const clickedPattern = patterns.filter(pattern => pattern.id === id);

        // If the pattern's clicked value is already true,
        // do the game over actions
        if (clickedPattern[0].clicked){

            currentScore = 0;
            clickMessage = "Uh-Oh! You already clicked on that one! Click any image to start a new Game.";

            patterns.forEach((element) => {
              element.clicked = false;
            });

            this.setState({ clickMessage });
            this.setState({ currentScore });
            this.setState({ patterns });

        // Otherwise, if clicked = false, and the user hasn't finished
        } else if (currentScore < 11) {

            // Set its value to true
            clickedPattern[0].clicked = true;

            // increment the appropriate counter
            currentScore++;

            clickMessage = "Correct! Keep Going!";

            if (currentScore > bestScore){
                bestScore = currentScore;
                this.setState({ bestScore });
            }

            // Shuffle the array to be rendered in a random order
            patterns.sort((a,b) => {
              return 0.5 - Math.random()
            });

            // Set this.state.patterns equal to the new patterns array
            this.setState({ patterns });
            this.setState({ currentScore });
            this.setState({ clickMessage });
        } else {

            // Set its value to true
            clickedPattern[0].clicked = true;

            // restart the guess counter
            currentScore = 0;

            // Ask user to play again
            clickMessage = "Nice Work!!! You got ALL of them!!! Dare you to try again!";
            bestScore = 12;
            this.setState({ bestScore });

            patterns.forEach((element) => {
              element.clicked = false;
            });

            // Shuffle the array to be rendered in a random order
            patterns.sort((a,b) => {
              return 0.5 - Math.random()
            });

            // Set this.state.patterns equal to the new patterns array
            this.setState({ patterns });
            this.setState({ currentScore });
            this.setState({ clickMessage });

        }
    };

  render() {
    return (
    <div>
      <Navbar />

      <div className="gameMessage">
        <div className="scoreSummary">
          <h3>
              Correct Guesses: {this.state.currentScore}
              <br />
              Best Score: {this.state.bestScore}
          </h3>
        </div>
        <p className="instructions">
            {this.state.clickMessage}
        </p>
      </div>

      <Wrapper>
        {this.state.patterns.map(pattern => {
          return (
            <ImageCard
              key={pattern.id}
              id={pattern.id}
              name={pattern.name}
              image={pattern.image}
              setClicked={this.setClicked}
            />
          );
        })}
      </Wrapper>
    </div>
    );
  }
}

export default App;
