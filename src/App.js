import React from 'react';
import './App.css';
import Button from './button.js';

class App extends React.Component {
  constructor () {
    super()
    this.state = { choice: '' }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let games = ['Warcraft III', 'StarCraft II', 'Age of Empires II', 'StarCraft Remastered'];
    let random = games[Math.floor(Math.random()*games.length)];

    this.setState({ choice: random })

  }

  render() {
    return (
      <div className="container">
        <div className="choosegame">
          <Button onClick={this.handleClick} />
        </div>
        <div className="displayResults">
          <p>You should play {this.state.choice} </p>
        </div>
      </div>
      
    );
  }
}


export default App;