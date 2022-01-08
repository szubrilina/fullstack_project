import React from 'react';
import '../../style/CreateNewSet.css';

function AddSetName() {
    return (
        <div>
            <div className='add_set_name'> 
                <input placeholder='set name' />
                {/* // onKeyPress={onKeyPressHandler}/> */}
            </div>
        </div>
    )
 }
 
 export default AddSetName;