class Match {
    constructor(id, team1, team2, result1 = 0, result2 =0, winner){
        this.id = id;
        this.team1 = team1
        this.team2 = team2
        this.result1 = result1
        this.result2 = result2
        this.winner = winner
    }
}

export default Match