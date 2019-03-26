import config from '../config'
import server from '../server/main'
import _debug from 'debug'

const debug = _debug('app:bin:server')
const port = config.server_port
const host = config.server_host

server.listen(port)
debug(`Dev server is now running at http://${host}:${port}.`)
debug(`Dev server accessible via localhost:${port} if you are using the project defaults.`)
