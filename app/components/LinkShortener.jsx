import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import { shortenLink, invalidLink } from '../actions/shrtrActions'
import { isLinkValid } from '../utils'

import LinkCopy from 'LinkCopy'

class LinkShortener extends Component {
  handleSubmit(e) {
    e.preventDefault()
    const linkUrl = this.refs.link.value

    if (isLinkValid(linkUrl)) {
      this.props.shortenLink(linkUrl)
    } else {
      this.props.invalidLink()
    }

    
  }

  renderButton() {
    if (this.props.loading) {
      return <p>Loading...</p>
    }

    return <input className="button" type="submit" value="Shrnk it!" />
  }

  renderShortenedLink() {
    if (this.props.shortenedLink) {
      let link = "http://localhost:8080/shrtr/" + this.props.shortenedLink.id
      return <LinkCopy link={link} />
    }

    return null
  }

  render() {
    return (
      <div className="shortener-container">
        <form 
          onSubmit={this.handleSubmit.bind(this)}
        >
            <input 
              type="text" 
              placeholder="Enter the link you want to shorten"
              ref="link"
              required
              className="link"
            />
            {this.renderButton()}
            {this.props.error ? this.props.error : ''}
        </form>
        {this.renderShortenedLink()}
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  const { error, loading, shortenedLink } = state.shrtr

  return { error, loading, shortenedLink }
}

export default connect(
  mapStateToProps,
  {
    shortenLink,
    invalidLink
  }
)(LinkShortener)