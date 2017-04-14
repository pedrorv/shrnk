import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <div style={styles.divStyles}>
        <h1 style={styles.h1Styles}>shrnk</h1>
        <h3 style={styles.h3Styles}>URL shortener</h3>
      </div>
    )
  }
}

const styles = {
  divStyles: {
    textAlign: 'center'
  },
  h1Styles: {
    fontSize: '5rem'
  },
  h3Styles: {
    fontSize: '1.2rem'
  }
}

export default Header