import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'


class Shrtr extends Component {
  handleSubmit(e) {
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
            <input 
              type="text" 
              placeholder="Enter the link you want to shorten"
              ref="link"
              required
            />
            <input type="submit" value="Make it shrtr!" />
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { error, loading, shrtrLink } = state.shrtr

  return { error, loading, shrtrLink }
}

export default connect(
  mapStateToProps,
  {}
)(Shrtr)