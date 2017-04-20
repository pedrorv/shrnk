import React from 'react'
import { Link } from 'react-router'

const NotFound = (props) => {
    return (
        <div>
            <p>Page not found.</p>
            <Link to={'/shrnk'}>Home</Link>
        </div>
    )
}

export default NotFound