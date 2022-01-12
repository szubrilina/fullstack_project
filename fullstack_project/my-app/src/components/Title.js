import React from 'react'
import '../style/Title.css';

import { Link } from 'react-router-dom';


function Title() {
  return (
    <div className="Title">
      <h1>FlashCardsLearner</h1>
      <div className='title-subtitle-btn'>
        <Link to='/create-new-set'><button className='button subtitle-btn'>Create</button></Link>
        <Link to='/profile'><button className='button subtitle-btn'>Profile</button></Link>
      </div>
      <div className="Title-Subtitle">
        <Link to='/signup' style={{color: 'white'}} className='link'>sign up</Link>
        <Link to='/login' style={{color: 'white'}} className='link'>log in</Link>
        <Link to='/' style={{color: 'white'}} className='link'>log out</Link>
      </div>
  </div>
  )
}

export default Title