const express = require('express');
const cors = require('cors');
const logRouter = require('./routes/log');
const writer = require('./utils/writer');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', logRouter);

process.stdin.resume();

function exitHandler(options, exitCode) {
    if (options.cleanup) {
        console.log('cleanup...');
        if (writer) {
            writer.dispose();
        }
    }
    if (exitCode || exitCode === 0) console.log('exit code:', exitCode);
    if (options.exit) process.exit();
}

//do something when app is closing
process.on('exit', exitHandler.bind(null,{cleanup:true}));

//catches ctrl+c event
process.on('SIGINT', exitHandler.bind(null, {exit:true}));

// catches "kill pid" (for example: nodemon restart)
process.on('SIGUSR1', exitHandler.bind(null, {exit:true}));
process.on('SIGUSR2', exitHandler.bind(null, {exit:true}));

//catches uncaught exceptions
process.on('uncaughtException', exitHandler.bind(null, {exit:true}));

module.exports = app;


