import { WinsAnalysis } from './analysers/WinsAnalysis';
import { MatchReader } from './MatchReader';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { Summary } from './Summary';

const reader = new MatchReader('assets/football.csv')
reader.read()
const winsAnalyser = new WinsAnalysis('Man United')
const consoleReport = new ConsoleReport()
const summary = new Summary(winsAnalyser, consoleReport)

Summary.winsAnalysisWithConsolReport('Man United').buidAndReportPrint(reader.data)
summary.buidAndReportPrint(reader.data)
