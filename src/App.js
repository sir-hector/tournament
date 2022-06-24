import './App.css';
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import NewTournament from './components/form/NewTournament';
import { useState } from 'react';
import Bracket from './components/match/Bracket';



function App() {
  const [setting, setSettings] = useState({})
  const [teams, setTeams] = useState({})
  const [tournament, setTournament] = useState({})

  const updateMatch = (value) => {
    console.log(value.id)
    console.log(value)
    setTournament(prevTournament => {
      const newState = prevTournament.map(obj => {
        obj.matches.forEach(match => {
            if(match.id === value.id){
              match.result1 = value.result1
              match.result2 = value.result2
              // return {...match, result1: 15}
            }
        });
        return obj
       
      })
      return newState
    })
  }

  console.log(tournament)

  return (
    <div className="App">
      <Header/>
      <NewTournament updateState ={(value) => setSettings(value)} updateTeams = {(value => setTeams(value))} updateTournament ={(value => setTournament(value))}/>
      {setting.type && <Bracket tournament={tournament} updateMatch = {(value => updateMatch(value))} />}
      <Footer/>
    </div>
  );
}

export default App;
