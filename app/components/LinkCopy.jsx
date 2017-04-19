import React, { Component } from 'react'

class LinkCopy extends Component {
  constructor(props) {
    super(props)

    this.initialState = { copyButton: 'Copy' }

    this.state = { copyButton: this.initialState.copyButton }
  }

  handleCopyLink(e) {
    e.preventDefault()

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
        <form onSubmit={this.handleCopyLink.bind(this)}>
          <input
            id="generated-link"
            className="copy-link"
            type="text"
            value={this.props.link}
            readOnly
          />
          <button
            className="button"
            type="submit"
          >
            {this.state.copyButton}
          </button>
        </form>
      </div>
    )
  }
}

export default LinkCopy