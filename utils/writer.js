const fs = require('fs');

let logFilePath = 'ngx-logger-backend.log';
const argLogPath = process.argv.slice(2)[0];
if (argLogPath) {
    logFilePath = argLogPath;
}

const NgxLoggerLevel = {
    0: 'TRACE',
    1: 'DEBUG',
    2: 'INFO',
    3: 'LOG',
    4: 'WARN',
    5: 'ERROR',
    6: 'FATAL',
    7: 'OFF'
}

console.log('Appending log file', logFilePath);
const logStream = fs.createWriteStream(logFilePath, {flags: 'a'});

const writer = {
    logStream,
    
    write: function(log) {
        logStream.write(
            `[${log.timestamp}] ${NgxLoggerLevel[log.level]} (${log.fileName}:${log.lineNumber}): ${log.message} ${log.additional.join()}\n`
        );
    },

    dispose: function() {
        if (logStream) {
            logStream.end();
        }
    }
};

module.exports = writer;
