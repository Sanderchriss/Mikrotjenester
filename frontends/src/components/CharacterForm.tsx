import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';

// Define the character interface for type safety
interface Character {
    name: string;
    race: string;
    characterClass: string;
    level: number;
}

const CharacterForm: React.FC = () => {
    // Add type annotations for useState
    const [character, setCharacter] = useState<Character>({
        name: '',
        race: '',
        characterClass: '',
        level: 1
    });

    // Type the event correctly with ChangeEvent
    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setCharacter({
            ...character,
            [e.target.name]: e.target.value
        });
    };

    // Type the form submission event with FormEvent
    const handleSubmit = async (e: FormEvent): Promise<void> => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/characters', character);
            console.log('Character created:', response.data);
        } catch (error) {
            console.error('Error creating character', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" value={character.name} onChange={handleChange} placeholder="Name" />
            <input name="race" value={character.race} onChange={handleChange} placeholder="Race" />
            <input name="characterClass" value={character.characterClass} onChange={handleChange} placeholder="Class" />
            <input name="level" type="number" value={character.level} onChange={handleChange} placeholder="Level" />
            <button type="submit">Create Character</button>
        </form>
    );
};

export default CharacterForm;

