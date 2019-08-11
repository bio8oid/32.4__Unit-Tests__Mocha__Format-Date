const os = require('os');
const formatDate = require('./index');
import formatDate from './index.js'

const uptime = formatDate(os.uptime());

console.log(`Current uptime is ${uptime}`);