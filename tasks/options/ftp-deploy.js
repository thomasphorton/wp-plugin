/* jshint globalstrict: true */

'use strict';

module.exports = {
  build: {
    auth: {
      host: 'thomasphorton.com',
      port: 21,
      authKey: 'key1'
    },
    src: 'dist/',
    dest: '/wp-content/themes/<%= pkg.name %>',
    exclusions: [
      '**/.DS_Store'
    ]
  }
};