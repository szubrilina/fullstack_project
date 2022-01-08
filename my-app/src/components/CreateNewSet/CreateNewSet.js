import React, {useState} from 'react';
import AddSetDescription from './AddSetDescription';
import AddSetName from './AddSetName';
import '../../style/CreateNewSet.css';
import WordSet from './WordSet.js'


function CreateNewSet() {

    let wordSet = [
        {
            id: 1,
            part1: 'cat',
            part2: 'кошка'
        },
        {
            id: 2,
            part1: 'bog',
            part2: 'собака'
        }
    ]

    return (
        <div>
            <h2>Create new set:</h2>
            <AddSetName />
            <AddSetDescription />
            <h2>Add new words to your set!</h2>

            <div className='add_word'>
                <input placeholder='type a word' />
                <input placeholder='type translation' />
                <button className='button' >add</button>
            </div>

            <h2>Your set contains:</h2>
            <WordSet words={wordSet} />

            <div className='create_set_btn'>
                <button className='button' >create set</button>
            </div>
        </div>
    )
}

export default CreateNewSet;

