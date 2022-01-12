import React from 'react';
import '../../style/Profile.css';
import { Link } from 'react-router-dom';

function SetRepresenting({set}) {
    console.log(set)
    return (
        <div className='signle-set'> 
            <Link to={`/learn-set/${set.set_id}`} set = {set} style={{color:'#2d3436'}}>{set.name}</Link> 
        </div>
    )
}

export default SetRepresenting;