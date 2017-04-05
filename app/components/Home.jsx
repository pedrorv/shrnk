import React from 'react'
import { Link } from 'react-router'

const Home = (props) => {
    return (
        <div>
            <p>Home Component</p>
            <Link to={'/shrtr/about'}>About</Link>
        </div>
    )
}

export default Home