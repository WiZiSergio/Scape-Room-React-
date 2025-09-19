import { useState, useEffect } from 'react';
import axios from 'axios';

const ShowCharacter = () => {
  const [characters, setCharacters] = useState([]);

  const getAllCharacters = async () => {
    try {
      const response = await axios.get('https://rickandmortyapi.com/api/character');
      console.log('Characters fetched:', response.data.results.map(char => char.name));
      setCharacters(response.data.results);
    } catch (error) {
      console.error('Error fetching characters:', error);
    }
  };

  useEffect(() => {
    getAllCharacters();
  }, []);

  return (
    <>
      <h1>Personajes de Rick y Morty</h1>
      <div>
        {characters.map((character) => (
          <div key={character.id}>
            <img src={character.image} alt={character.name} />
            <p>Nombre: {character.name}</p>
            <p>Especie: {character.species}</p>
            <p>Estado: {character.status}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ShowCharacter;