import React from 'react';
import '../../style/CreateNewSet.css';

function AddSetDescription(props) {
    const Update = props.Update;
    return (
        <div>
            <div className='add_set_description'> 
                <input placeholder='set description' name='description' onChange = {
                        e => Update(e.target.value)
                    }/>
            </div>
        </div>
    )
 }
 
 export default AddSetDescription;