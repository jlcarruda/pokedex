import './App.css';
import NavBar from './components/layout/NavBar';
import PokemonSearch from './components/PokemonSearch';

function App() {
  return (
    <div>
      <div className="Navbar">
        <NavBar />
      </div>

      <PokemonSearch />

    </div>
  );
}

export default App;
