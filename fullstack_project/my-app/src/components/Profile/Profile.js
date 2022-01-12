
import React, { useState, useEffect } from 'react';
import '../../style/Profile.css';
import axios from 'axios';
import SetRepresenting from './SetRepresenting'

function Profile() {

    const baseURL = "http://127.0.0.1:8000/api/";
    let calculate = (sets) => {
        if (sets.length <= 1) {return sets;}
        else return [sets[0], sets[1]];
    }
    const [sets, GetSets] = useState([]);
    useEffect( () => {
        axios( {
            method: "GET",
            url: baseURL + 'sets/list',
        }).then(response => {
            const data = response.data;
            GetSets(data);
        })
    }, [])

    let user = {
        name: 'Sofia',
        surname: 'Zubrilina',
        email: 'myemail@gmail.com',
        password: '******'
    }

    return (
        <div>
            <h1 style={{margin: '20px'}}>Hi {user.name}!</h1>
            <h2>Your study sets:</h2>
            <div className='all-sets'>
                {sets.map(set => <SetRepresenting set = {set} />)}
            </div>
            <h2>Sets to learn today:</h2>
            <div className='all-sets'>
                {calculate(sets).map(set => <SetRepresenting set = {set} />)}
            </div>
            <p className='notice'>click on the set to start learning!</p>
        </div>
    )
}

export default Profile;