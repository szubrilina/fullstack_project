import React, {useState} from 'react';
import '../../style/LearnSet.css';
import FlashCard from './FlashCard'

import {Context} from '../../context'


function LearnSet() {
     ///////////////////////////////////////////////////////////////////////////////////
    // DATA
    //////////////////////////////////////////////////////////////////////////////////
    let wordSet1 = {
        id: 0,
        words: [
            {
                id: 0,
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
    let wordSet2 = {
        id: 1,
        words: [
            {
                id: 1,
                part1: 'Take into consideration',
                part2: 'принимать к сведению',
                isLernt: false,
                lastSeen: '03.01.2022' // dd.mm.yyyy
            },
            {
                id: 2,
                part1: 'Once in a blue moon',
                part2: 'Очень редко, почти никогда',
                isLernt: true,
                lastSeen: '01.01.2022' // dd.mm.yyyy
            },
            {
                id: 3,
                part1: 'Have butterflies in your stomach',
                part2: 'Быть очень взволнованным, нервным',
                isLernt: false,
                lastSeen: '01.01.2022' // dd.mm.yyyy
            },
            {
                id: 4,
                part1: 'See eye to eye',
                part2: 'Иметь такую же точку зрения',
                isLernt: false,
                lastSeen: '01.01.2022' // dd.mm.yyyy
            }
        ],
        name: 'English Ideoms', 
        description: 'Some most popular English ideoms.'
    };
    let wordSet3 = {
        id: 2,
        words: [
            {
                id: 1,
                part1: 'mother',
                part2: 'мама',
                isLernt: false,
                lastSeen: '03.01.2022' // dd.mm.yyyy
            },
            {
                id: 2,
                part1: 'father',
                part2: 'папа',
                isLernt: true,
                lastSeen: '01.01.2022' // dd.mm.yyyy
            }
        ],
        name: 'Family members', 
        description: 'Names of family members.'
    };
     ///////////////////////////////////////////////////////////////////////////////////
    // DATA
    //////////////////////////////////////////////////////////////////////////////////

    const [state, setState] = useState([wordSet1, wordSet2, wordSet3]);

    // console.log(Context.value);
    // console.log("LearnSet", {state});

    let fullPath = window.location.href;
    let ind = fullPath.indexOf('learn-set')
    let size = 'learn-set'.length;
    let setId = fullPath.substring(ind + size + 1);

    return (
        <div>
            <FlashCard data={state} setId={setId} />
        </div>
    )
}

export default LearnSet;

