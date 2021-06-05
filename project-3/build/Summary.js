"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
var WinsAnalysis_1 = require("./analysers/WinsAnalysis");
var ConsoleReport_1 = require("./reportTargets/ConsoleReport");
var Summary = /** @class */ (function () {
    function Summary(analyser, outputTarget) {
        this.analyser = analyser;
        this.outputTarget = outputTarget;
    }
    Summary.prototype.buidAndReportPrint = function (matches) {
        var report = this.analyser.run(matches);
        this.outputTarget.print(report);
    };
    Summary.winsAnalysisWithConsolReport = function (teamname) {
        return new Summary(new WinsAnalysis_1.WinsAnalysis(teamname), new ConsoleReport_1.ConsoleReport());
    };
    return Summary;
}());
exports.Summary = Summary;
