import React, { Component } from 'react'
import { Link } from 'react-router'

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <Link to={'/shrnk'}><h1>shrnk</h1></Link>
        <h3>URL shortener</h3>
      </div>
    )
  }
}

export default Header