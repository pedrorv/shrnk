import React, { Component } from 'react'
import firebase from 'firebase'

class LinkInfo extends Component {
  constructor(props) {
    super(props)

    this.state = { linkInfo: null }
  }

  componentDidMount() {
    firebase.database()
      .ref('links')
      .orderByChild('id')
      .equalTo(this.props.params.id)
      .once('value')
      .then(data => {
        let val = data.val()
        let keys = Object.keys(val)

        this.setState({ linkInfo: val[keys[0]] })
      })
  }

  renderLinkInfo() {
    if (this.state.linkInfo) {
      console.log(this.state)
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