import React from 'react';
import '../../style/Home.css';

import { Link } from 'react-router-dom';

import AddBlock from './AddBlock';

function Home() {
    
    return (
        <div>

            <AddBlock />
            <div className='button_wrapper_for_home_page'>
                <Link to='/signup'><button className='button'>Sign Up for Free</button></Link>
                <Link to='/profile'><button className='button'>Learn new words</button></Link>
                <Link to='/create-new-set'><button className='button'>Create new Set</button></Link>
            </div>

        </div>
    )
}

export default Home;