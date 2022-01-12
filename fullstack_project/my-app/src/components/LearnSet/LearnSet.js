import React, {useState, useEffect} from 'react';
import '../../style/LearnSet.css';
import FlashCard from './FlashCard'
import { useParams } from 'react-router-dom';
import {Context} from '../../context'
import axios from 'axios';


function LearnSet() {
    const params = useParams();
    const baseURL = "http://127.0.0.1:8000/api/";
    const [set, GetSet] = useState({
        name: 'reload(wait)',
        words: [
            {   'part1': 'parrot',
                'part2': 'попугайчик',
                'id': 0,
                'isLearnt': false, 
            }
        ]
    });
    let {setId} = params;
    const [state, setState] = useState({
        text1: set.words[0].part1,
        text2: set.words[0].part2,
        wordId: 0,
        wordSet: set
    });
    useEffect( () => {
        axios({
            method: "GET",
            url: baseURL + 'set/get/' + setId, 
        }).then(response => response.data).then((data =>{
            GetSet(data)
            setState({        
                text1: data.words[0].part1,
                text2: data.words[0].part2,
                wordId: 0,
                wordSet: data})
        }))}, []);
    return (
        <div>
            <FlashCard set={set} setId={setId} state = {state} setState = {setState}/>
        </div>
    )
}

export default LearnSet;

