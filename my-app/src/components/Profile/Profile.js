import React from 'react';
import '../../style/Profile.css';

import SetRepresenting from './SetRepresenting'

function Profile() {

    // TODO: rewrite
    let calculate = (sets) => {
        if (sets.length <= 1) {return sets;}
        else return [sets[0], sets[1]];
    }

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

    let user = {
        name: 'Sofia',
        surname: 'Zubrilina',
        email: 'myemail@gmail.com',
        password: '******'
    }

    let sets = [wordSet1, wordSet2, wordSet3];
    let setsForToday = calculate(sets);

    return (
        <div>
            <h1 style={{margin: '20px'}}>Hi {user.name}!</h1>
            <h2>Your study sets:</h2>
            <div className='all-sets'>
                {sets.map(set => <SetRepresenting set = {set} />)}
            </div>
            <h2>Sets to learn today:</h2>
            <div className='all-sets'>
                {setsForToday.map(set => <SetRepresenting set = {set} />)}
            </div>
            <p className='notice'>click on the set to start learning!</p>
        </div>
    )
}

export default Profile;