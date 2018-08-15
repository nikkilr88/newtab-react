import React, { Component } from 'react'

class Time extends Component {
  render() {
   const styles = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      textShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
      color: '#fcfcfc',
      fontSize: '7em',
      fontWeight: 'bold',
   }

   return (
      <div style={ styles }>
         { this.props.time }
      </div>
   )
  }
}

export default Time;