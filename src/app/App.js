import React, { Component } from 'react'
import './App.css'

import Background from './components/Background'
import Time from './components/Time'
import Search from './components/Search'
import SearchIcon from './components/SearchIcon'

import HttpService from '../services/http-service'
const http = new HttpService();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      background: '',
      time: '',
      showSearch: false
    }
  }

  componentWillMount() {
    this.getBackground()
    this.setTime()
    this.updateTime()
  }

  getBackground = () => {
    http.getBackground()
    .then(background => {
      this.setState({ background })
    })
  }

  setTime = () => {
    let d = new Date()
    let hours = d.getHours()
    let mins = d.getMinutes()
    
    this.setState({
      time: `${hours}:${mins}`
    })
  }

  updateTime = () => {
    setInterval(this.setTime, 1000)
  }

  toggleSearch = () => {
    this.setState({
      showSearch: !this.state.showSearch
    })
  }

  render() {
    const bgStyle = {
      height: '100vh',
      width: '100%',
      backgroundImage: `url(${this.state.background.img})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover'
    }

    return (
      <div className="App" style={ bgStyle }>

        {/* Search Window */}
        { this.state.showSearch && 
          <Search 
            bg={ this.state.background.img } 
            toggle={ this.toggleSearch }
          /> 
        }
        
        {/* Search Icon */}
        <SearchIcon
          toggle={this.toggleSearch}
        />

        {/* Time */}
        <Time 
          time={ this.state.time }
        />

        {/* Background Information */}
        <Background 
          bg={ this.state.background } 
        />
      </div>
    )
  }
}

export default App
