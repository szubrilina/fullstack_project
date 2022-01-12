import React from 'react';
import '../../style/Home.css';
import logo from '../../img/boy.jpg';

function AddBlock({text}, {picture}) {
    
    return (
        <div>
            <div className='add-text'>
                
                    <p>Early morning? All-nighter? With science-backed revision methods 
                that improve active recall, <div className='FlashCartLearner'>FlashCardsLearner</div> is designed to save you time!</p>

                    <p>Easily create your own sets.
                    Revise at home, school or on the go with our app!</p>
                
            </div>
        </div>
    )
}

export default AddBlock;