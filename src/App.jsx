import './App.css';
import CardList from './components/CardList';
import cards from './assets/json/cards.json';
import Header from './components/Header';
const App = () => {
  return (
    <>
    <Header/>
    <div className="App">
      <br/>
      <h1>🌸🔥 BTS Playlist 🔥🌸</h1>
      <br/>
      <CardList cards={cards} /> 
    </div>
    </>
  )
}

export default App;
