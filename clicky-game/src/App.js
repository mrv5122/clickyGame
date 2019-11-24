import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import selected from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    selected
  };

  selectedCharacter = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const selected = this.state.selected.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ selected });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Clicky Game</Title>
        {this.state.selected.map(friend => (
          <FriendCard
            selectedCharacter={this.selectedCharacter}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
