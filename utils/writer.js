const fs = require('fs');

let logFilePath = 'aoc-client-logger.log';
const argLogPath = process.argv.slice(2)[0];
if (argLogPath) {
    logFilePath = argLogPath;
}
console.log('Appending log file', logFilePath);
const logStream = fs.createWriteStream(logFilePath, {flags: 'a'});

const writer = {
    logStream,
    
    write: function(log) {
        logStream.write(
            `[${log.timestamp}] ${log.level} (${log.fileName}:${log.lineNumber}): ${log.message} ${log.additional.join()}\n`
        );
    },

    dispose: function() {
        if (logStream) {
            logStream.end();
        }
    }
};

module.exports = writer;
