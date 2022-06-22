import './App.css';
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import NewTournament from './components/form/NewTournament';
import { useState } from 'react';



function App() {
  const [setting, setSettings] = useState({})
  const [teams, setTeams] = useState({})
  const [tournament, setTournament] = useState({})


  return (
    <div className="App">
      <Header/>
      <NewTournament updateState ={(value) => setSettings(value)} updateTeams = {(value => setTeams(value))} updateTournament ={(value => setTournament(value))}/>
      {setting.type && <div>Wygenerowano</div>}
      <Footer/>
    </div>
  );
}

export default App;
