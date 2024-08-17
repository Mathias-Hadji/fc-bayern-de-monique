import React, { useState, useEffect } from "react";
import "./App.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase/firebaseConfig";
import { SpeedInsights } from "@vercel/speed-insights/react";
import TeamTable from "./components/TeamTable";
import logo from "./assets/logo.png";
import Footer from "./components/Footer";

function App() {
    const [players, setPlayers] = useState([]);
    const [lastUpdated, setLastUpdated] = useState(null);

    useEffect(() => {
        async function loadPlayers() {
            const querySnapshot = await getDocs(collection(db, "players"));
            const playersData = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setPlayers(playersData);

            const latestUpdate = playersData.reduce((latest, player) => {
                const playerUpdate = player.lastUpdated?.toDate(); // Convertir le timestamp Firestore en Date
                return playerUpdate > latest ? playerUpdate : latest;
            }, new Date(0));

            setLastUpdated(latestUpdate);
        }

        loadPlayers();
    }, []);

    return (
        <div className="App">
            <div className="overlay"></div>
            <div className="content">
                <div className="title-container">
                    <img src={logo} alt="Logo" className="logo" />
                    <h1>FC Bayern de Monique</h1>
                </div>
                <h2>Statistiques pour la saison 2024-2025</h2>
                <TeamTable players={players} />
            </div>
            <Footer lastUpdated={lastUpdated} />
            <SpeedInsights />
        </div>
    );
}

export default App;
