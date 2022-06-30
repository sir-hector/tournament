import './App.css';
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import Table from './components/table/Table'
import NewTournament from './components/form/NewTournament';
import { useState } from 'react';
import Bracket from './components/match/Bracket';
import './App.css'



function App() {
  const [setting, setSettings] = useState({})
  const [teams, setTeams] = useState([])
  const [tournament, setTournament] = useState({})

  const updateMatch = (value) => {
    setTournament(prevTournament => {
      const newState = prevTournament.map(obj => {
        obj.matches.forEach(match => {
            if(match.id === value.id){
              match.result1 = value.result1
              match.result2 = value.result2
              match.winner = true
            }
        });
        return obj
       
      })
      return newState
    })
    updateTeams(value)
  }

  function updateTeams(value){
    let winner;
    let looser;
    let winnerGoalsScored;
    let winnerGoalsAgainst;
    let draw = false

    if(value.result1 > value.result2){
      winner = value.team1;
      looser = value.team2;
      winnerGoalsScored = value.result1
      winnerGoalsAgainst = value.result2

    }else if(value.result1 < value.result2){
      winner = value.team2
      looser = value.team1;
      winnerGoalsScored = value.result2
      winnerGoalsAgainst = value.result1
    }else{
      draw = true;
      winner = value.team2
      looser = value.team1;
      winnerGoalsScored = value.result1
      winnerGoalsAgainst = value.result2
    }


    setTeams(currentTeams => {
      const newTeams = structuredClone(currentTeams);
      newTeams.forEach(team => {
        if(draw){
          if(winner == team.id){
            team.points += 1;
            console.log(team.goals_scored)
            team.goals_scored = parseInt(team.goals_scored) + parseInt(winnerGoalsScored)
            team.goals_against = parseInt(team.goals_against) + parseInt(winnerGoalsAgainst)
          }
          if(looser == team.id){
            team.points += 1;
            team.goals_scored = parseInt(team.goals_scored) + parseInt(winnerGoalsAgainst)
            team.goals_against = parseInt(team.goals_against) + parseInt(winnerGoalsScored)
          }
        }else{
        if(winner == team.id){
          team.points += 3;
          console.log(team.goals_scored)
          team.goals_scored = parseInt(team.goals_scored) + parseInt(winnerGoalsScored)
          team.goals_against = parseInt(team.goals_against) + parseInt(winnerGoalsAgainst)
        }
        if(looser == team.id){
          team.points += 0;
          team.goals_scored = parseInt(team.goals_scored) + parseInt(winnerGoalsAgainst)
          team.goals_against = parseInt(team.goals_against) + parseInt(winnerGoalsScored)
        }
      }
      })
      return newTeams
    })
  }

  return (
    <div className="App">
      <Header/>
      <NewTournament updateState ={(value) => setSettings(value)} updateTeams = {(value => setTeams(value))} updateTournament ={(value => setTournament(value))}/>
      {setting.type && <Bracket tournament={tournament} updateMatch = {(value => updateMatch(value))} />}
      {<Table  teams={teams}/>}
      <Footer/>
    </div>
  );
}

export default App;
