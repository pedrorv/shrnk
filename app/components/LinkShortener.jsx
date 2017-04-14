import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import { shortenLink, invalidLink } from '../actions/shrtrActions'
import { isLinkValid } from '../utils'

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

    return <input style={styles.buttonStyles} type="submit" value="Shrnk it!" />
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
      <div style={styles.divStyles}>
        <form 
          onSubmit={this.handleSubmit.bind(this)}
          style={styles.formStyles}
        >
            <input 
              type="text" 
              placeholder="Enter the link you want to shorten"
              ref="link"
              required
              style={styles.inputStyles}
            />
            {this.renderButton()}
            {this.renderShrtrLink()}
            {this.props.error ? this.props.error : ''}
        </form>
      </div>
    )
  }
}

const styles = {
  divStyles: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    flexGrow: 1,
    maxWidth: 500,
    width: '90%',
  },
  formStyles: {
    display: 'flex',
    flexDirection: 'column',
  },
  buttonStyles: {
    alignSelf: 'center',
    backgroundColor: '#09A8A3',
    border: 'none',
    color: '#fff',
    fontFamily: 'monospace, sans-serif',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginTop: 10,
    minWidth: '30%',
    padding: 5,
  },
  inputStyles: {
    fontFamily: 'monospace, sans-serif',
    fontSize: '1.5rem',
    padding: 5,
  }
}

const mapStateToProps = (state) => {
  const { error, loading, shrtrLink } = state.shrtr

  return { error, loading, shrtrLink }
}

export default connect(
  mapStateToProps,
  {
    shortenLink,
    invalidLink
  }
)(LinkShortener)