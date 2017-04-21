import React, { Component } from 'react'

class LinkCopy extends Component {
  constructor(props) {
    super(props)

    this.initialState = { copyButton: 'Copy' }

    this.state = { copyButton: this.initialState.copyButton }
  }

  handleCopyLink() {
    if (this.linkHaveNotBeenCopied()) {
      this.copyLinkToClipboard()
      this.setState({ copyButton: 'Copied!' })
    }
  }

  copyLinkToClipboard() {
    document.querySelector("#generated-link").select()
    document.execCommand('copy')
  }

  linkHaveNotBeenCopied() {
    return this.state.copyButton === this.initialState.copyButton
  }

  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps) {
      this.setState({ ...this.initialState })
    }
  }

  render() {
    return (
      <div className="container">
        <input
          id="generated-link"
          className="copy-link"
          type="text"
          value={this.props.link}
          style={{ position: 'absolute', top: 0, left: '-9999px' }}
          readOnly
        />
        <h3 className="copy-message">Your shortened link is:</h3>
        <div className="copy-link-box">
          <p className="copy-link">{this.props.link}</p>
        </div>
        <button
          className="button"
          onClick={this.handleCopyLink.bind(this)}
        >
          {this.state.copyButton}
        </button>
      </div>
    )
  }
}

export default LinkCopy