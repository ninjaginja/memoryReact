import React from "react";
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
import patterns from "./patterns.json";

let currentScore = 0;
let bestScore = 0;
let clickMessage = "Click on an image to earn points, but don't click on any of them more than once!";

class App extends React.Component {

  state = {
    patterns,
    bestScore,
    clickMessage
  };

  setClicked = id => {

        // Make a copy of the state patterns array to work with
        const patterns = this.state.patterns;

        // Filter for the clicked pattern
        const clickedPattern = patterns.filter(pattern => pattern.id === id);

        // If the patterned image's clicked value is already true,
        // do the game over actions
        if (clickedPattern[0].clicked){

            console.log ("Correct Guesses: " + currentScore);
            console.log ("Best Score: " + bestScore);

            currentScore = 0;
            clickMessage = "Dang! You already clicked on that one! Now you have to start over!"

            for (let i = 0 ; i < patterns.length ; i++){
                patterns[i].clicked = false;
            }

            this.setState({clickMessage});
            this.setState({ currentScore });
            this.setState({patterns});

        // Otherwise, if clicked = false, and the user hasn't finished
        } else if (currentScore < 11) {

            // Set its value to true
            clickedPattern[0].clicked = true;

            // increment the appropriate counter
            currentScore++;

            clickMessage = "Great! You haven't click on that one yet! Keep going!";

            if (currentScore > bestScore){
                bestScore = currentScore;
                this.setState({ bestScore });
            }

            // Shuffle the array to be rendered in a random order
            patterns.sort(function(a, b){return 0.5 - Math.random()});

            // Set this.state.patterns equal to the new patterns array
            this.setState({ patterns });
            this.setState({ currentScore });
            this.setState({ clickMessage });
        } else {

            // Set its value to true
            clickedPattern[0].clicked = true;

            // restart the guess counter
            currentScore = 0;

            // Egg on the user to play again
            clickMessage = "WOW!!! You got ALL of them!!! Now, let's see if you can do it again!";
            bestScore = 12;
            this.setState({ bestScore });

            for (let i = 0 ; i < patterns.length ; i++){
                patterns[i].clicked = false;
            }

            // Shuffle the array to be rendered in a random order
            patterns.sort(function(a, b){return 0.5 - Math.random()});

            // Set this.state.patterns equal to the new patterns array
            this.setState({ patterns });
            this.setState({ currentScore });
            this.setState({ clickMessage });

        }
    };

  render() {
    return (
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
    );
  }
}

export default App;
