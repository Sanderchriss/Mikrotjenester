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
                    <Route path="/" element={<h1>Dragepust <br/> Character Creator</h1>}/>
                    <Route path="/create-character" element={<CharacterForm />} />
                    <Route path="/characterlist" element={<CharacterList />} />
                </Routes>
            </div>
        </Router>

        </>
    );
};

export default App
