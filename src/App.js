import React, { Component } from 'react';
import './App.css';
import Keyboard from './Components/Keyboard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sounds: [{
        key: 'Q',
        keyCode: 81,
        id: 'Heater-1',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
        clicked: false
      },
      {
        key: 'W',
        keyCode: 87,
        id: 'Heater-2',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
        clicked: false
      },
      {
        key: 'E',
        keyCode: 69,
        id: 'Heater-3',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
        clicked: false
      },
      {
        key: 'A',
        keyCode: 65,
        id: 'Heater-4',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
        clicked: false
      },
      {
        key: 'S',
        keyCode: 83,
        id: 'Clap',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
        clicked: false
      },
      {
        key: 'D',
        keyCode: 68,
        id: 'Open-HH',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
        clicked: false
      },
      {
        key: 'Z',
        keyCode: 90,
        id: 'Kick-n\'-Hat',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
        clicked: false
      },
      {
        key: 'X',
        keyCode:88,
        id: 'Kick',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
        clicked: false
      },
      {
        key: 'C',
        keyCode: 67,
        id: 'Closed-HH',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
        clicked: false
      }],
      currentText: ''
    }
    this.changeText = this.changeText.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  changeText(text) {
    this.setState({
      currentText: text
    })
  }
  handleKeyPress(e) {
    const drumKey = this.state.sounds.find(obj => obj.keyCode === e.keyCode);
    if(drumKey) {
      const drumPad = document.getElementById(drumKey.id);
      drumPad.classList.add('pressed');
      setTimeout(() => {
        drumPad.classList.remove('pressed')
      }, 100)
    }

    var keyNumber;
    for (let i = 0; i < this.state.sounds.length; i++) {
      keyNumber = this.state.sounds[i].keyCode;
      if (keyNumber === e.keyCode) {
        var sound = document.getElementById(this.state.sounds[i].key);
        sound.play();
        this.changeText(this.state.sounds[i].id);
      }
    }
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }
    render() {
      return (
        <div id="drum-machine" className="App container-fluid">
          <div className="row">
            <div className="container-fluid col-xs-12 col-sm-8 col-md-6">
              <Keyboard sounds={this.state.sounds} 
                currentText={this.state.currentText} 
                changeText={this.changeText}
                handleKeyPress={this.handleKeyPress} />
            </div>
          </div>
        </div>
      );
    }
}

export default App;
