import CoreLayout from '../layouts/CoreLayout'
import Home from './Home'

export const createRoutes = (store) => ({
  path: '/',
  component: CoreLayout,
  indexRoute: Home,
  getChildRoutes (location, cb) {
    require.ensure([], require => {
      cb(null, [
        require('./About').default,
        require('./Projects').default(store),
        require('./Contact').default
      ])
    })
  }
})

export default createRoutes
