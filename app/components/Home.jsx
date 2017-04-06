import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

class Home extends Component {
  render() {
    return (
      <div>
        <form>
            <input type="text" placeholder="Enter the link you want to shorten" />
            <input type="submit" value="Make it shrtr!" />
        </form>
      </div>
    )
  }
}

export default connect()(Home)