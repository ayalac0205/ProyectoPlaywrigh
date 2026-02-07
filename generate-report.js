const reporter = require('cucumber-html-reporter');

const options = {
  theme: 'bootstrap',
  jsonFile: 'reports/cucumber-report.json',
  output: 'reports/report.html',
  reportSuiteAsScenarios: true,
  launchReport: true,
  metadata: {
    "App": "Sauce Demo",
    "Browser": "Chromium",
    "Framework": "Playwright + Cucumber",
    "QA": "Brandon"
  }
};

reporter.generate(options);
