export default {
  path: 'about',
  getComponent (nextState, cb) {
    require.ensure([], require => {
      const About = require('./containers/AboutViewContainer').default

      cb(null, About)
    })
  }
}
