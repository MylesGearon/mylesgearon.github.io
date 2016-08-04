import { connect } from 'react-redux'

export default store => ({
  path: 'meta',
  getComponent (nextState, cb) {
    require.ensure([], require => {
      const Meta = require('./Meta').default

      const mapStateToProps = state => ({
        curBreakpoint: state.breakpoint.current
      })

      cb(null, connect(mapStateToProps, {})(Meta))
    })
  }
})
