import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers";

class Team {
    constructor(id, name, points= 0, goals_scored=0, goals_against=0){
        this.id = id;
        this.name = name
        this.points = points
        this.goals_scored = goals_scored
        this.goals_against = goals_against
    }
}
export default Team