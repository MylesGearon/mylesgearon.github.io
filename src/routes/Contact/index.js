import { connect } from 'react-redux'

export default {
  path: '/contact',
  getComponent (nextState, cb) {
    require.ensure([], require => {
      const ContactView = require('./components/ContactView').default

      const mapStateToProps = state => ({
        curBreakpoint: state.breakpoint.current
      })

      cb(null, connect(mapStateToProps, {})(ContactView))
    })
  }
}
