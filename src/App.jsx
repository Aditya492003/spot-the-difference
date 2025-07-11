import { useEffect, useState } from 'react';
import GameBoard from './components/GameBoard';

export default function App() {
  const [config, setConfig] = useState(null);

  useEffect(() => {
    fetch('/assets/config.json')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load config.json');
        return res.json();
      })
      .then((data) => {
        console.log('Loaded config:', data); 
        setConfig(data);
      })
      .catch((error) => {
        console.error('Error loading config:', error); 
      });
  }, []);

  return (
    <div>
      {config ? <GameBoard config={config} /> : <p>Loading game...</p>}
    </div>
  );
}
