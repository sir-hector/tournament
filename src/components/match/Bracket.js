import Match from "./Match"

const Bracket = ({ tournament }) => {
    return (
        <div>
            {tournament.map((round, id) => (
                <div key={id}>
                    <h2>Round: {id+1}</h2>
                    {round.matches.map((match, index) => (
                        <div key = {index}>
                            <Match match={match} />
                        </div>
                    ))}
                </div>
            )

            )}
        </div>
    )
}

export default Bracket