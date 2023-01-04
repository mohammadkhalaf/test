import { useEffect, useState } from 'react';
import List from './components/List';
import './App.css';
import Pagination from './components/Pagination';
import Logo from './logo.svg';

function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/');

  useEffect(() => {
    const getPokemon = async () => {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setNextUrl(data.next);
      setPrevUrl(data.previous);
      setItems(data.results);
      setLoading(false);
    };
    getPokemon();
  }, [url]);

  return (
    <main>
      <div className='logo-container'>
        <img src={Logo} alt='' className='logo' />
      </div>
      <List items={items} />
      <Pagination nextUrl={nextUrl} prevUrl={prevUrl} setUrl={setUrl} />
      {/* <button disabled={!prevUrl} onClick={() => setUrl(prevUrl)}>
        prev
      </button>
      <button disabled={!nextUrl} onClick={() => setUrl(nextUrl)}>
        next
      </button> */}
    </main>
  );
}

export default App;
