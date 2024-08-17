import React, { useState, useEffect } from "react";
import "./App.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase/firebaseConfig";
import { SpeedInsights } from "@vercel/speed-insights/react";
import TeamTable from "./components/ScorersTable";

function App() {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        async function loadPlayers() {
            const querySnapshot = await getDocs(collection(db, "players"));
            const playersData = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setPlayers(playersData);
        }

        loadPlayers();
    }, []);

    return (
        <div className="App">
            <h1>FC Bayern de Monique</h1>
            <h2>Statistiques pour la saison 2024-2025</h2>
            <TeamTable players={players} />
            <SpeedInsights />
        </div>
    );
}

export default App;
