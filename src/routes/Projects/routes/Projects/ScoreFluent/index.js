import { connect } from 'react-redux'

export default store => ({
  path: 'score-fluent',
  getComponent (nextState, cb) {
    require.ensure([], require => {
      const ScoreFluent = require('./ScoreFluent').default

      const mapStateToProps = state => ({
        curBreakpoint: state.breakpoint.current
      })

      cb(null, connect(mapStateToProps, {})(ScoreFluent))
    })
  }
})
