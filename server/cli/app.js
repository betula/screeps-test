#!/usr/bin/env node --harmony

const
  App = require('../src'),
  Path = require('path')
;

App({
  db: {
    filename: Path.resolve(__dirname, '../data/users.js')
  },
  hostname: '127.0.0.1',
  port: 2020
});