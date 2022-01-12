import React, {useState} from 'react';
import '../../style/SetInfo.css';
import RadialChart from './RadialChart'

function SetStatistic() {

    let wordSet = {
        words: [
            {
                id: 1,
                part1: 'cat',
                part2: 'koshka',
                isLearnt: false,
                lastSeen: '03.01.2022' // dd.mm.yyyy
            },
            {
                id: 2,
                part1: 'dog',
                part2: 'cobaka',
                isLearnt: true,
                lastSeen: '01.01.2022' // dd.mm.yyyy
            }
        ],
        name: 'Domestic Animals', 
        description: 'Names of some most popular animals.'
    };
    
    let notLearnt = 0;
    let learnt = 0;
    for (var i = 0; i < wordSet.words.length; ++i) {
        let elem = wordSet.words[i];
        if (elem.isLearnt === false) {notLearnt = notLearnt + 1;}
        else {learnt = learnt + 1;}
    }
    let persantage = 100 * learnt / (notLearnt + learnt);

    console.log(persantage);
    return (
       <div>
           <h2>Progress:</h2>
           <div className='circle-position'>
                <RadialChart progress={persantage} color="#3c71d0"/>
                <h3 className='progress-message'>You have lernt {persantage}% of the set!</h3>
           </div>
           
       </div>
    )
}

export default SetStatistic;

