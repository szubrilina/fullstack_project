import React from 'react';
import '../../style/CreateNewSet.css';

function Word({word}) {
    let {id, part1, part2} = word;

    return (
        <div className='word_parts'>
            <div className='word_part1'>
                {part1}
            </div>
            <div className='word_part2'>
                {part2}
            </div>
        </div>
    )
}

export default Word;