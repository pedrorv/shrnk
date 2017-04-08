import React, { Component } from 'react'
import firebase from 'firebase'

import { getLinkInfo, updateLinkAccessCount } from '../api'

class LinkInfo extends Component {
  constructor(props) {
    super(props)

    this.state = { linkInfo: null }
  }

  componentDidMount() {
    getLinkInfo(this.props.params.id)
      .then(data => {
        this.setState({ linkInfo: data.linkInfo })
        updateLinkAccessCount(data.key)
      })
  }

  renderLinkInfo() {
    if (this.state.linkInfo) {
      return <p>{this.state.linkInfo.link}</p>
    }

    return <div></div>
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