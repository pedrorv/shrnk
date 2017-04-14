import React, { Component } from 'react'
import firebase from 'firebase'

import Header from 'Header'

class Main extends Component {
    componentWillMount() {
        var config = {
            apiKey: "AIzaSyBI0wzws5u-kwWEd-HLsick5LOUUafPjWU",
            authDomain: "shrtr-a4744.firebaseapp.com",
            databaseURL: "https://shrtr-a4744.firebaseio.com",
            projectId: "shrtr-a4744",
            storageBucket: "shrtr-a4744.appspot.com",
            messagingSenderId: "818860627919"
        }
        firebase.initializeApp(config)
    }

    render() {
        return (
            <div style={style}>
                <Header />
                {this.props.children}
            </div>
        )
    }
}

const style = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
}

export default Main
