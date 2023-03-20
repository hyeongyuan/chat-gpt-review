require('dotenv').config();

const { run } = require('probot');
const bot = require('./bot');

run(bot);

console.log('world');
