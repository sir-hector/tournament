import Match from "./Match"

const Bracket = ({ tournament, updateMatch }) => {

    return (
        <div>
            {tournament.map((round, id) => (
                <div key={id}>
                    <h2>Round: {id+1}</h2>
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