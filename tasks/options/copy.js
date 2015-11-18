/* jshint globalstrict: true */

'use strict';

module.exports = {
  copyToWP: {
    files: [{
      expand: true,
      cwd: 'dist',
      src: ['**'],
      dest: '../wordpress/wp-content/plugins/<%= pkg.name %>'
    }]
  },
  copyToDist: {
    files: [{
      expand: true,
      cwd: 'src',
      src: [
        '**/*.php',
        '**/*.js'
      ],
      dest: 'dist'
    }]
  }
};