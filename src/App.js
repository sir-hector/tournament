import './App.css';
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import NewTournament from './components/form/NewTournament';
import { useState } from 'react';

function App() {
  const [game, setGame] = useState({})

  return (
    <div className="App">
      <Header/>
      <NewTournament updateState ={(value) => setGame(value)}/>
      <Footer/>
    </div>
  );
}

export default App;
