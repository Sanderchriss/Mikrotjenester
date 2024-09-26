import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Define the character interface for the list
interface Character {
    id: number;
    name: string;
    race: string;
    characterClass: string;
    level: number;
}

const CharacterList: React.FC = () => {
    // Type the state with an array of Character
    const [characters, setCharacters] = useState<Character[]>([]);

    useEffect(() => {
        axios.get('/api/characters')
            .then(response => setCharacters(response.data))
            .catch(error => console.error('Error fetching characters', error));
    }, []);

    return (
        <div>
            <h1>Character List</h1>
            <ul>
                {characters.map((character: Character) => (
                    <li key={character.id}>
                        {character.name} - {character.race} - {character.characterClass} - Level {character.level}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CharacterList;
