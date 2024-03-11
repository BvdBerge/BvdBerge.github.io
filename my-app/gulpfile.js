const { series, parallel } = require('gulp');

function defaultTask(cb) {
  // Define your tasks here
  cb();
}

exports.default = defaultTask;