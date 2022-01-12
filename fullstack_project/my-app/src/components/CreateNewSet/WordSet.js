import React from 'react';
import '../../style/CreateNewSet.css';
import Word from './Word';


function WordSet({words}) {
    console.log(words);
    return (
        <div className='word_set'>
            {words.map(elem => <Word key={elem.id} word={elem} />)}
        </div>
    )
}

export default WordSet; 