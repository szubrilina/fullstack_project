import React from 'react';
import '../style/LogIn.css';

import { NavLink } from 'react-router-dom';


function SignUp() {
    return (
        <div>
           <div className='wrapper_for_nice_picture'>
                <div className='login_items'>
                    <h1>Sign up</h1>
                    <input className='login_item' placeholder='name'/>
                    <input className='login_item' placeholder='surname'/>
                    <input className='login_item' placeholder='email'/>
                    <input className='login_item' placeholder='password' secureTextEntry={true} />
                </div>

                <div className='buttons_wrapper'>
                    <div className='sign_up button'>
                        sign up
                    </div>
                    Already have an account?  <NavLink className="navbar-item" activeClassName="is-active" to="/login" exact>Log in!</NavLink>
                </div>
            </div>
        </div>
    )
}

export default SignUp;