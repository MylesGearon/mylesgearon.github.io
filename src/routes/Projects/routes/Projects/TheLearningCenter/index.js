import { connect } from 'react-redux'

export default store => ({
  path: 'the-learning-center',
  getComponent (nextState, cb) {
    require.ensure([], require => {
      const TheLearningCenter = require('./TheLearningCenter').default

      const mapStateToProps = state => ({
        curBreakpoint: state.breakpoint.current
      })

      cb(null, connect(mapStateToProps, {})(TheLearningCenter))
    })
  }
})
