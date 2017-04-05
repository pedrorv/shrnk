import React, { Component } from 'react'

class Main extends Component {
    render() {
        return (
            <div>
                <p>Main Component</p>
                {this.props.children}
            </div>
        )
    }
}

export default Main