import Match from "./Match"

const Bracket = ({ tournament, updateMatch }) => {
    return (
        <div className="tournament-bracket">
            {tournament.map((round, id) => (
                <div key={id}  className="tournament-round">
                    <h2 className="tournament-round_header">Round: {id+1}</h2>
                    {round.matches.map((match, index) => (
                        <div key = {index}>
                            <Match match={match} updateMatch={updateMatch}/>
                        </div>
                    ))}
                </div>
            )

            )}
        </div>
    )
}

export default Bracket