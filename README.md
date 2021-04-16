# ngx-logger-backend

Server for writing ngx-logger post requests into a file.

## Usage

`npm start /path/to/output.log`

In angular project using ngx-logger, set `serverLoggingUrl: 'http://hostname:3003/log'` or whatever works for your case.

You can change the port using the PORT env variable.

## Output format

`[yyyy-MM-dd HH:mm:ss.SSS Z] level (fileName:lineNumber): message additional`

## Contributions

Your code contributions and issues are welcome.
