import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div style={{color:'#e84393', margin: '20px'}}>
            <h1>Sorry, that page is not found =( </h1>
            <Link to='/home'>Go homepage</Link>
        </div>
    )
}

export default NotFound;