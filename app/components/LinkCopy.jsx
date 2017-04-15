import React, { Component } from 'react'

class LinkCopy extends Component {
  copyLink(e) {
    e.preventDefault()

    if (document.querySelector("#copy-button").value === "Copy to clipboard") {
      document.querySelector("#generated-link").select()
      document.execCommand('copy')
      document.querySelector("#copy-button").value = "Copied!"
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
            value="Copy to clipboard"  
          />
        </form>
      </div>
    )
  }
}

export default LinkCopy