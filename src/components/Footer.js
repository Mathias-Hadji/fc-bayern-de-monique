import "../Footer.css";

function Footer({ lastUpdated }) {
    return (
        <footer>
            {lastUpdated && (
                <p>
                    Dernière mise à jour du classement le{" "}
                    {lastUpdated.toLocaleDateString()} à{" "}
                    {lastUpdated.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                    })}{" "}
                    - © Mathias Hadji
                </p>
            )}
        </footer>
    );
}

export default Footer;
