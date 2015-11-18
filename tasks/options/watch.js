/* jshint globalstrict: true */

'use strict';

module.exports = {
  dist: {
    files: [
      'dist/**/*'
    ],
    tasks: ['copy:copyToWP'],
    options: {
      livereload: true
    }
  },
  php: {
    files: [
      'src/**/*.php'
    ],
    tasks: ['copy:copyToDist']
  }
};