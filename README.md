# aoc-client-logger-backend

Server for writing aoc-client logger post requests into a file.

## Usage

`npm start /path/to/output.log`

In angular project using aoc-client, set `serverLoggingUrl: 'http://hostname:3003/log'` or whatever works for your case.

You can change the port using the PORT env variable.

## Output format

`[yyyy-MM-dd HH:mm:ss.SSS Z] level (fileName:lineNumber): message additional`

## Security

Please note that it is on your side to provide the security level you might require in terms of the exposition of these endpoints.
For example, you can have your proxy to accept only connections from a specified IPs, or use any other kind of strategy your might
think is enough in terms of assuring that only an actual aoc-client applications are using these endpoints.

## Contributions

Your code contributions and issues are welcome.
