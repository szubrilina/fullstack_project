import React, {useState} from 'react';

import SetStatistic from './SetStatistic'

import WordSet from '../CreateNewSet/WordSet';

import '../../style/SetInfo.css';

import { Link } from 'react-router-dom';



function SetInfo() {

    let wordSet = {
        words: [
            {
                id: 1,
                part1: 'cat',
                part2: 'кошка',
                isLernt: false,
                lastSeen: '03.01.2022' // dd.mm.yyyy
            },
            {
                id: 2,
                part1: 'bog',
                part2: ' собака',
                isLernt: true,
                lastSeen: '01.01.2022' // dd.mm.yyyy
            }
        ],
        name: 'Domestic Animals', 
        description: 'Names of some most popular animals.'
    };
    
    return (
        <div>
            <h2>Information of the set:</h2>
            <h2 className='information-title'>name: {wordSet.name}</h2>
            <h2 className='information-content'>description: {wordSet.description}</h2>
            <SetStatistic />
            <h2>Your set contains:</h2>
            <WordSet words={wordSet.words} />
            
            <div className='learn_set_btn'>
            <Link to="/learn-set"><button className='button' >learn set</button></Link>
                <p className='note_for_learn_set_btn'>click to start learning this set </p>
            </div>
            
        </div>  
    )
}

export default SetInfo;

