import React, { Component } from 'react'

class LinkCopy extends Component {
  constructor(props) {
    super(props)

    this.initialState = { copyButton: 'Copy' }

    this.state = { copyButton: this.initialState.copyButton }
  }

  handleCopyLink(e) {
    e.preventDefault()

    if (this.linkHaventBeenCopied()) {
      this.copyLinkToClipboard()
      this.setState({ copyButton: 'Copied!' })
    }
  }

  copyLinkToClipboard() {
    document.querySelector("#generated-link").select()
    document.execCommand('copy')
  }

  linkHaventBeenCopied() {
    return this.state.copyButton === this.initialState.copyButton
  }

  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps) {
      this.setState({ ...this.initialState })
    }
  }

  render() {
    return (
      <div className="copy-container">
        <form onSubmit={this.handleCopyLink.bind(this)}>
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