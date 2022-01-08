import React, {useState} from 'react';
import {Fragment} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Home from './Home/Home'
import LogIn from './Login'
import SignUp from './SignUp'
import NotFound from './NotFound';
import CreateNewSet from './CreateNewSet/CreateNewSet';
import LearnSet from './LearnSet/LearnSet';
import SetInfo from './SetInfo/SetInfo';
import Profile from './Profile/Profile'
import Title from './Title';

import {Context} from '../context'


function App() {
    document.body.style.backgroundColor = 'white';

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
    // const [state, setState] = useState(wordSet1);//[wordSet1, wordSet2, wordSet3]);
    ///////////////////////////////////////////////////////////////////////////////////
    // DATA
    //////////////////////////////////////////////////////////////////////////////////
      
    return (
        // <Context.Provider value={[wordSet1]}>
        <div>
            <Router>
                <Title />
                <Fragment>
                    <Routes>
                        <Route exact path="/" element={<Home />}/>
                        <Route exact path="/login" element={<LogIn />} />
                        <Route exact path="/signup" element={<SignUp />} />
                        <Route exact path="/create-new-set" element={<CreateNewSet />} />
                        <Route exact path="/learn-set/*" element={<LearnSet/>} />
                        <Route exact path="/set-info" element={<SetInfo />} />
                        <Route exact path="/profile" element={<Profile />} />
                        <Route exact path="/home" element={<Home />} />
                        <Route path = '*' element={<NotFound />}/>
                    </Routes>
                </Fragment>
            </Router>
        </div>
        // </Context.Provider>
    )
}

export default App;  