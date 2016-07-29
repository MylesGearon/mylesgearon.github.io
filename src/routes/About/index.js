export default {
  path: 'about',
  getComponent (nextState, cb) {
    require.ensure([], require => {
      const About = require('./components/AboutView').default

      cb(null, About)
    })
  }
}
