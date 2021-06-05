import { Analyser } from "../Summary";
import { MatchResults } from '../MatchResults'
import { MatchData } from '../MatchData'

export class WinsAnalysis implements Analyser {
    constructor(public team: string) { }

    run(matches: MatchData[]): string {
        let counter = 0;
        for (let match of matches) {
            if (match[1] === this.team && match[5] === MatchResults.HomeWin)
                counter += 1
            if (match[2] === this.team && match[5] === MatchResults.AwayWin)
                counter += 1
        }

        return `Team: ${this.team} won ${counter}`
    };
}