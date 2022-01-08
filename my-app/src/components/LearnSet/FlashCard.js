import React, {useState} from 'react';

import '../../style/LearnSet.css';

import {Context} from '../../context'

function FlashCard({data, setId}) {
    // console.log("setId", parseInt(setId) === 2);
    var wordSet = data.filter(elem => elem.id === parseInt(setId) /*console.log("elem:", elem.id === parseInt(setId))*/)
    // console.log("wordSet", wordSet);
    if (wordSet.length != 1) {
        wordSet = [data[0]];
    }
    wordSet = wordSet[0];
    // console.log("setId", setId);
    // console.log("data", data);
    console.log("wordSet", wordSet);
    console.log("wordSet.words", wordSet.words);
    
    const [state, setState] = useState({
        text1: wordSet.words[0].part1,
        text2: wordSet.words[0].part2,
        wordId: 0,
        wordSet: wordSet
    })
    
    const onClickButton_FlipCard = () => {
        setState({
            text1: state.text2,
            text2: state.text1,
            wordId: state.wordId,
            wordSet: state.wordSet
        });
    }
    const onClickButton_NextCard = () => {
        const id = (state.wordId + 1 === (wordSet.words.length) ? 0 : state.wordId + 1);
        
        setState(() => {
            console.log(id);
            console.log(state.wordSet.words[id].text1);
            return  {
                text1: state.wordSet.words[id].part1,
                text2: state.wordSet.words[id].part2,
                wordId: id,
                wordSet: wordSet
            }
        });
        console.log(state.text1, state.text2, state.log)
    }

    return (
        <div>
            <h2>{wordSet.name}</h2>
            <div className='card-wrapper'>
                <div className='card'>
                    <h2>{state.text1}</h2>
                </div>
            </div>
                
                <div className='button-wrapper'>
                    <button className='button study_again' onClick={onClickButton_NextCard} >Study again</button>
                    <button onClick={onClickButton_FlipCard} className='button' >Flip the card</button>
                    <button className='button got_it' onClick={onClickButton_NextCard} >Got it</button>
                </div>
            </div>
        
    )
}

export default FlashCard;

