import { connect } from 'react-redux'

export default store => ({
  path: 'olnc',
  getComponent (nextState, cb) {
    require.ensure([], require => {
      const OLNC = require('./OLNC').default

      const mapStateToProps = state => ({
        curBreakpoint: state.breakpoint.current
      })

      cb(null, connect(mapStateToProps, {})(OLNC))
    })
  }
})
