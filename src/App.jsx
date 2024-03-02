import './App.css';
import CardList from './components/CardList';
import cards from './cards.json';
const App = () => {
  return (
    <div className="App">
      <h1>🌸🔥 BTS Playlist 🔥🌸</h1>
      <CardList cards={cards} /> 
    </div>
  )
}

export default App;
