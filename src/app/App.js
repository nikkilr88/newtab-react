import React, { Component } from 'react';
import './App.css';
import Background from './Background';

import HttpService from '../services/http-service';
const http = new HttpService();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      background: ''
    }
    this.getBackground();
  }

  getBackground = () => {
    http.getBackground()
    .then(background => {
      this.setState({ background });
      let style = document.body.style;
      style.background = `url(${this.state.background.img})`;
      style.backgroundRepeat = 'no-repeat';
      style.backgroundSize = 'cover';
    });
  }

  render() {
    return (
      <div className="App">
        <Background 
          bg={this.state.background} 
        />
      </div>
    );
  }
}

export default App;
