import React from 'react'
import { Link } from 'react-router'

const NotFound = (props) => {
    return (
        <div style={{ textAlign: 'center' }}>
            <p>Oops! We can't find the page you are looking for.</p>
            <p><Link to={'/shrnk'}>Click here to shrnk a link.</Link></p>
        </div>
    )
}

export default NotFound