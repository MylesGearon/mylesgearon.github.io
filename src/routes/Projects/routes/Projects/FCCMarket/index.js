import { connect } from 'react-redux'

export default store => ({
  path: 'fcc-market',
  getComponent (nextState, cb) {
    require.ensure([], require => {
      const FCCMarket = require('./FCCMarket').default

      const mapStateToProps = state => ({
        curBreakpoint: state.breakpoint.current
      })

      cb(null, connect(mapStateToProps, {})(FCCMarket))
    })
  }
})
