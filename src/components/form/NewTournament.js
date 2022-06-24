import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import './css/newTournament.css'
import Team from '../../models/Team';
import robin from 'roundrobin'
import Round from '../../models/Round';
import Match from '../../models/Match';



const NewTournament = ({ updateState, updateTeams, updateTournament }) => {
    const { handleSubmit, register, errors, unregister } = useForm();

    const initialTeam = {
        "name": "name",
    }
    const [teams, setTeams] = useState([initialTeam, initialTeam]);

    const onSubmit = (values) => {
        updateState(values)
        updateTeams(generateBracket(values))
    }

    const onChange = (e) => {
        renderTeams(e.target.value)
    }

    const renderTeams = (amount) => {
        const newArray = []
        for (let i = 0; i < amount; i++) {
            newArray.push(initialTeam)
        }
        setTeams(newArray)
    }

    function generateBracket(games) {
        const teamsArray = [];
        for (let game in games) {
            if (game.includes("team")) {
                teamsArray.push(new Team(game, games[game]))
            }
        }
        generateRounds(teamsArray);
    }

    function generateRounds(teams) {
        let roundsArray = [];

        for (let i = 1; i < teams.length; i++) {
            roundsArray.push(new Round(i, []))
        }
        roundsArray = generateMatchesInRounds(teams, roundsArray)
    }

    function generateMatchesInRounds(teams, roundsArray) {
        let array = robin(teams.length, teams)
        console.log(array)
        roundsArray.forEach((round, id) => {
            round.matches = []
            array[id].forEach((game,id2) => {
                round.matches.push(new Match(`${id}${id2}`, game[0], game[1]))
            })
        })
        updateTournament(roundsArray)
    }



    return (
        <form onSubmit={handleSubmit(onSubmit)} className="tournament-form">
            <label> Amout of teams:
                <select {...register("number")} onChange={onChange}>
                    <option value="2">2</option>
                    <option value="4">4</option>
                    <option value="8">8</option>
                    <option value="16">16</option>
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
                    <input key={q}  {...register(`team${q}`, {shouldUnregister: true})}></input>
                </label>
            )}
            <input type="submit" value="generate" />
        </form>
    );

}

export default NewTournament;