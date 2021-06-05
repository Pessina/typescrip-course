import { MatchData } from './MatchData'
import { WinsAnalysis } from './analysers/WinsAnalysis';
import { ConsoleReport } from './reportTargets/ConsoleReport';

export interface Analyser {
    run(matches: MatchData[]): string;
}

export interface OutputTarget {
    print(report: string): void;
}

export class Summary {
    constructor(
        public analyser: Analyser,
        public outputTarget: OutputTarget) { }

    buidAndReportPrint(matches: MatchData[]): void {
        const report = this.analyser.run(matches)
        this.outputTarget.print(report)
    }

    static winsAnalysisWithConsolReport(teamname: string) {
        return new Summary(new WinsAnalysis(teamname), new ConsoleReport())
    }
}