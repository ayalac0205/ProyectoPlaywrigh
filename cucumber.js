module.exports = {
  default: {
    require: [
      'features/steps/**/*.js',
      'features/hooks/**/*.js'
    ],
    format: [
      'json:reports/report.json'
    ],
    publishQuiet: true
  }
};