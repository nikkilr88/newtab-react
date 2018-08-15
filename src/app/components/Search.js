import React, { Component } from 'react'
import './Search.css'

class Search extends Component {
   render() {
      const bgStyles = {
         backgroundImage: `url(${this.props.bg})`,
         backgroundSize: 'cover',
         backgroundPosition: 'center',
      }

      return (
         <div className='search'>
            <div className='bg' style={ bgStyles } />
            <i 
               className="material-icons times" 
               onClick={ this.props.toggle }
            > close </i>
            <input type='text' id='search' spellCheck='false' />
         </div>
      )
   }
}

export default Search