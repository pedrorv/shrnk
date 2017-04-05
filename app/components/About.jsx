import React from 'react'
import { Link } from 'react-router'

const About = (props) => {
    return (
        <div>
            <p>About Component</p>
            <Link to={'/shrtr/'}>Home</Link>
        </div>
    )
}

export default About