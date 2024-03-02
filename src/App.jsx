import './App.css';
import CardList from './components/CardList';
import cards from './assets/json/cards.json';
const App = () => {
  return (
    <div className="App">
      <h1>🌸🔥 BTS Playlist 🔥🌸</h1>
      <br/>
      <CardList cards={cards} /> 
    </div>
  )
}

export default App;
