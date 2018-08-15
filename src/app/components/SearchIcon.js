import React from 'react'

const SearchIcon = (props) => {
   const styles = {
      position: 'absolute',
      top: '25px',
      right: '25px',
      color: '#fcfcfc',
      cursor: 'pointer'
   }

  return (
    <div style={ styles }>
        <i class="material-icons" onClick={ props.toggle } >search</i>
    </div>
  )
}

export default SearchIcon