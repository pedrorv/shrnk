import React, { Component } from 'react'

const ErrorMessage = (props) => {
  return (
    <article className="message is-danger">
      <div className="message-body">
        {props.error}
      </div>
    </article>
  )
}

export default ErrorMessage