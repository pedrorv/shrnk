import React, { Component } from 'react'
import firebase from 'firebase'

import { getLinkInfo, updateLinkAccessCount } from '../api'

class LinkInfo extends Component {
  constructor(props) {
    super(props)

    this.state = { linkInfo: null, error: '', loading: true }
  }

  componentDidMount() {
    getLinkInfo(this.props.params.id)
      .then(data => {
        this.setState({ linkInfo: data.linkInfo, loading: false })
        updateLinkAccessCount(data.key)
      })
      .catch(error => this.setState({ error, loading: false }))
  }

  renderLinkInfo() {
    const { loading, error, linkInfo } = this.state

    if (loading) {
      return <p>Loading...</p>
    }
    if (error) {
      return <p>{error}</p>
    }

    return <p>{this.state.linkInfo.link}</p>
  }
  
  render() {
    return (
      <div>
        {this.renderLinkInfo()}
      </div>
    )
  }
}

export default LinkInfo