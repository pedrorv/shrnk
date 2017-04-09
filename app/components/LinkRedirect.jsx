import React, { Component } from 'react'
import firebase from 'firebase'
import { browserHistory } from 'react-router'

import { getLinkInfo, updateLinkAccessCount } from '../api'
import { formatLink, redirectTo } from '../utils'

class LinkRedirect extends Component {
  constructor(props) {
    super(props)

    this.state = { linkInfo: null, loading: true }
  }

  componentDidMount() {
    getLinkInfo(this.props.params.id)
      .then(data => {
        this.setState({ linkInfo: data.linkInfo, loading: false })
        updateLinkAccessCount(data.key)
      })
      .catch(() => browserHistory.push('/shrtr/not-found'))
  }

  renderLinkInfo() {
    const { loading, linkInfo } = this.state

    if (loading) {
      return <p>Loading...</p>
    }

    if (linkInfo) {
      setInterval(() => redirectTo(formatLink(linkInfo.link)), 2000)
    }

    return <p>Redirecting to {linkInfo.link}</p>
  }
  
  render() {
    return (
      <div>
        {this.renderLinkInfo()}
      </div>
    )
  }
}

export default LinkRedirect