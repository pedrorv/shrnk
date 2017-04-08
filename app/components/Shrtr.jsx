import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import { shortenLink } from '../actions/shrtrActions'

class Shrtr extends Component {
  handleSubmit(e) {
    e.preventDefault()
    const linkUrl = this.refs.link.value

    this.props.shortenLink(linkUrl)
  }

  renderButton() {
    if (this.props.loading) {
      return <p>Loading...</p>
    }

    return <input type="submit" value="Make it shrtr!" />
  }

  renderShrtrLink() {
    if (this.props.shrtrLink) {
      return (
        <div>
          <p>Key: {this.props.shrtrLink.id}</p>
          <p>Link: {this.props.shrtrLink.link}</p>
          <p>Access Count: {this.props.shrtrLink.access_count}</p>
        </div>
      )
    }

    return <div></div>
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
            {this.renderButton()}
            {this.renderShrtrLink()}
            {this.props.error ? this.props.error : ''}
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
  {
    shortenLink
  }
)(Shrtr)