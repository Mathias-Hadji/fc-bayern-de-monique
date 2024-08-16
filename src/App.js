import React, { useState, useEffect } from "react";
import "./App.css";
import ScorersTable from "./components/ScorersTable";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase/firebaseConfig";

function App() {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        async function loadPlayers() {
            const querySnapshot = await getDocs(collection(db, "players"));
            const playersData = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(), // Extraire les champs 'goalNumber' et 'playerName' pour chaque document
            }));
            setPlayers(playersData);
        }

        loadPlayers();
    }, []);

    return (
        <div className="App">
            <h1>Bayern de Monique saison 2024-2025</h1>
            <ScorersTable players={players} />
        </div>
    );
}

export default App;
