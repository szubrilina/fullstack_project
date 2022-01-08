import React from 'react';
import '../../style/CreateNewSet.css';

function AddSetDescription() {
    return (
        <div>
            <div className='add_set_description'> 
                <input placeholder='set description' />
                {/* // onKeyPress={onKeyPressHandler}/> */}
            </div>
        </div>
    )
 }
 
 export default AddSetDescription;