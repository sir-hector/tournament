const Match = ({match}) => {
    console.log(match)
    return(
        <div>
            {match.team1.name}
            {match.result1}
            {match.team2.name}
            {match.result2}
            <form>
                <input type='submit'></input>
            </form>
        </div>
    )
}

export default Match