import React from 'react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import './css/newTournament.css'

const NewTournament = ({updateState}) => {
    const { handleSubmit, register, errors } = useForm();

    const initialTeam = {
        "name": "name",
    }
    const [teams,setTeams] = useState([initialTeam, initialTeam]);

    const onSubmit = (values) => {
        console.log(values)
        updateState(values)
    }

    const onChange = (e) => {
        renderTeams(e.target.value)
    }

    const renderTeams = (amount) => {
        const newArray = []
        for(let i = 0; i <amount; i++){
            newArray.push(initialTeam)
        }
        setTeams(newArray)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="tournament-form">
            <label> Amout of teams: 
            <select {...register("number")} onChange={onChange}>
                <option value="2">2</option>
                <option value="4">4</option>
                <option value="8">8</option>
            </select>
            </label>
            <label> Type of tournament
            <select {...register("type")}>
                <option value="single-elimination">single-elimination</option>
                <option value="double-elimination">double-elimination</option>
                <option value="round robin">round robin</option>
            </select>
            </label>
            <p> TEAMS: </p>
            {teams.map((team, q) => 
                <label> Name: 
                <input key={q}  {...register(`teams${q}`)}></input>
                </label>
            )}
            <input type="submit" value="generate" />
        </form>
    );

}

export default NewTournament;