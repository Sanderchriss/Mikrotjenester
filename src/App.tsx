import './App.css'
import React from 'react'
import CharacterForm from "./components/CharacterForm.tsx";
import CharacterList from "./components/CharacterList.tsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App: React.FC = () => {
    return (
        <>
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<CharacterList />} />
                    <Route path="/create-character" element={<CharacterForm />} />
                </Routes>
            </div>
        </Router>
        <h1>Dragepust</h1>;
        </>
    );
};

export default App
