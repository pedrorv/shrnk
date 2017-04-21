import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import { shortenLink, invalidLink } from '../actions/shrnkActions'
import { isLinkValid } from '../utils'

import LinkCopy from 'LinkCopy'
import ErrorMessage from 'ErrorMessage'

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
    return (
      <button
        className={"button " + (this.props.loading ? "is-loading" : "")} 
        type="submit"
      >
        Shrnk it! 
      </button>
    )
  }

  renderShortenedLink() {
    const { shortenedLink } = this.props

    if (shortenedLink) {
      const { origin, pathname } = window.location
      let link = origin + pathname + (pathname.endsWith('/') ? shortenedLink.id : '/' + shortenedLink.id)
      return <LinkCopy link={link} />
    }

    return null
  }

  renderError() {
    if (!this.props.error) return null
    
    return <ErrorMessage error={this.props.error} />
  }

  render() {
    return (
      <div className="container">
        <form 
          onSubmit={this.handleSubmit.bind(this)}
        >
            <input 
              type="text" 
              placeholder="Paste your link here"
              ref="link"
              required
              className="link"
            />
            {this.renderButton()}
            {this.renderError()}
        </form>
        {this.renderShortenedLink()}
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  const { error, loading, shortenedLink } = state.shrnk

  return { error, loading, shortenedLink }
}

export default connect(
  mapStateToProps,
  {
    shortenLink,
    invalidLink
  }
)(LinkShortener)