import React from 'react';
import '../style/LogIn.css';

import { NavLink } from 'react-router-dom';


function LogIn() {
    return (
        <div>
            <div className='wrapper_for_nice_picture'>
                <div className='login_items'>
                    <h1>Log in</h1>
                    <input className='login_item' placeholder='username'/>
                    <input className='login_item' placeholder='password' secureTextEntry={true} />
                </div>

                <div className='buttons_wrapper'>
                    <div className='log_in button'>
                        log in
                    </div>
                    Don't have an account? <NavLink className="navbar-item" activeClassName="is-active" to="/signup" exact>Sign up!</NavLink>
                </div>
            </div>
        </div>
    )
}

export default LogIn;