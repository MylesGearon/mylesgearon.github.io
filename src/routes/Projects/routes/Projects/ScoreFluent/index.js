export default {
  path: 'score-fluent',
  getComponent (nextState, cb) {
    require.ensure([], require => {
      const ScoreFluent = require('./ScoreFluent').default

      cb(null, ScoreFluent)
    })
  }
}
