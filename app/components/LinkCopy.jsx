import React, { Component } from 'react'

class LinkCopy extends Component {
  constructor(props) {
    super(props)

    this.initialState = { copyButton: 'Copy' }

    this.state = { copyButton: this.initialState.copyButton }
  }

  copyLink(e) {
    e.preventDefault()

    if (this.state.copyButton === this.initialState.copyButton) {
      document.querySelector("#generated-link").select()
      document.execCommand('copy')
      this.setState({ copyButton: 'Copied!' })
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps) {
      this.setState({ ...this.initialState })
    }
  }

  render() {
    return (
      <div className="copy-container">
        <form onSubmit={this.copyLink.bind(this)}>
          <input
            id="generated-link"
            className="copy-link"
            type="text"
            value={this.props.link}
            readOnly
          />
          <input
            id="copy-button"
            className="copy-button"
            type="submit"
            value={this.state.copyButton}  
          />
        </form>
      </div>
    )
  }
}

export default LinkCopy