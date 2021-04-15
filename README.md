# ngx-logger-backend
Server for writing ngx-logger post requests into a file

## Usage

`npm start /path/to/output.log`

In angular project using ngx-logger, set `serverLoggingUrl: 'http://hostname:3003/log'` or whatever works for your case

You can change the port using the PORT env variable.
