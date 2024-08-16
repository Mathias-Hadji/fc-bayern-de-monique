function ScorersTable({ players }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Joueur</th>
                    <th>Nombre de Buts</th>
                    <th>Nombre de Passes décisives</th>
                </tr>
            </thead>
            <tbody>
                {players
                    .sort(
                        (playerA, playerB) =>
                            playerA.goalNumber - playerB.goalNumber
                    )
                    .reverse()
                    .map((player) => (
                        <tr key={player.id}>
                            <td>{player.playerName}</td>
                            <td>{player.goalNumber}</td>
                            <td>{player.assistNumber}</td>
                        </tr>
                    ))}
            </tbody>
        </table>
    );
}

export default ScorersTable;
