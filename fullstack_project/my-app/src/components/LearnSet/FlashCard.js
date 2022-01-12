import React, {useEffect, useState} from 'react';

import '../../style/LearnSet.css';
import {Context} from '../../context'
import { useNavigate } from 'react-router-dom';

function FlashCard({set, setId, state, setState}) {
    const {navigate} = useNavigate();
    const [redirect, Redirect] = useState(false);
    const onClickButton_FlipCard = () => {
        setState({
            text1: state.text2,
            text2: state.text1,
            wordId: state.wordId,
            wordSet: state.wordSet
        });
    }
    useEffect(() => {
        const goToPage = () => navigate('/set-info');
        if (redirect) {
          goToPage();
        }
        return () => {}
    }, []);
    const onClickButton_NextCard = () => {
        console.log((set.words.length), '     ', state.wordId + 1)
        
        const id = ((state.wordId + 1 == (set.words.length)) ? -1 : state.wordId + 1);
        console.log(id);
        if (id == -1) {
            Redirect(true);
        } 
        setState(() => {
            console.log(id);
            console.log(state.wordSet.words[id].text1);
            return  {
                text1: state.wordSet.words[id].part1,
                text2: state.wordSet.words[id].part2,
                wordId: id,
                wordSet: set
            }
        });
        console.log(state.text1, state.text2, state.log)
    }
    return (
        <div>
            <h2>{set.name}</h2>
            <div className='card-wrapper'>
                <div className='card'>
                    <h2>{state.text1}</h2>
                </div>
            </div>
                
                <div className='button-wrapper'>
                    <button className='button study_again' onClick={onClickButton_NextCard}>Study again</button>
                    <button onClick={onClickButton_FlipCard} className='button' >Flip the card</button>
                    <button className='button got_it' onClick={onClickButton_NextCard} >Got it</button>
                </div>
            </div>
        
    )
}

export default FlashCard;

