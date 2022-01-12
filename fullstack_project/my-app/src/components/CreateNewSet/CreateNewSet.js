import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import AddSetDescription from './AddSetDescription';
import AddSetName from './AddSetName';
import '../../style/CreateNewSet.css';
import WordSet from './WordSet.js'
import { Context } from '../../context';


function CreateNewSet({state}) {
    const navigate = useNavigate();
    const baseURL = "http://127.0.0.1:8000/api/";
    const [wordSet, ChangeWordSet] = useState({
        'words': []
    });
    const [setName, UpdateSetName] = useState('');
    const [description, UpdateDescription] = useState('');  
    const [part1, Updatepart1] = useState('');
    const [part2, Updatepart2] = useState('');
    const CreateSet = () => {
        fetch(baseURL + 'set/create/', {
            method: "POST",
            headers: {
                'Content-Type': 'Application/json',
            },
            body: JSON.stringify({
                'name': setName,
                'words': wordSet.words,
                'description': description
            })
        }).then((response) => {
            navigate("/profile");
        })
    }

    return (
        <div>
            <h2>Create new set:</h2>
            <AddSetName Update = {UpdateSetName}/>
            <AddSetDescription Update = {UpdateDescription}/>
            <h2>Add new words to your set!</h2>

            <div className='add_word'>
                <input placeholder='type a word' name='part1' onChange={
                    e => Updatepart1(e.target.value)
                }/>
                <input placeholder='type translation' name='part2' onChange = {
                    e => Updatepart2(e.target.value)
                }/>
                <button className='button' onClick = {
                    (e) => {
                        e.preventDefault()
                        const item = {'part1': part1, 'part2': part2}
                        ChangeWordSet({
                            'words': [...wordSet.words, item]
                          })
                    }
                }>add</button>
            </div>

            <h2>Your set contains:</h2>
            <WordSet words={wordSet.words} />

            <div className='create_set_btn'>
                <button className='button' onClick = { (e) =>{
                    e.preventDefault()
                    CreateSet()
                }}>create set</button>
            </div>
        </div>
    )
}

export default CreateNewSet;

