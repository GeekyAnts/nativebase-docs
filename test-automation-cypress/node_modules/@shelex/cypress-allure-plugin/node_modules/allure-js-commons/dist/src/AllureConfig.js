"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllureConfig = void 0;
class AllureConfig {
    constructor(resultsDir = "allure-results", testMapper, writer) {
        this.resultsDir = resultsDir;
        this.testMapper = testMapper;
        this.writer = writer;
    }
}
exports.AllureConfig = AllureConfig;
//# sourceMappingURL=AllureConfig.js.map