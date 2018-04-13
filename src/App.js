import React from "react";
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
import patterns from "./patterns.json";
import "./App.css";

class App extends React.Component {

  state = {
    patterns: patterns
  }

  remove = (id) => {
    this.setState({patterns: this.state.patterns.filter(pattern => pattern.id !== id)});
  }

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
          />
        );
      })}

    </Wrapper>
    );
  }
}

export default App;
