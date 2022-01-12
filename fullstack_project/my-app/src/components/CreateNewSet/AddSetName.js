import React, { useContext } from 'react';
import { Context } from '../../context';
import '../../style/CreateNewSet.css';

function AddSetName(props) {
    const Update = props.Update;
    return (
        <div>
            <div className='add_set_name'> 
                <input placeholder='set name' name='name' onChange = {
                        e => Update(e.target.value)
                    }/>
            </div>
        </div>
    )
 }
 
 export default AddSetName;