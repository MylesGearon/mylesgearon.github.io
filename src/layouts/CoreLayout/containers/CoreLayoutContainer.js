import { connect } from 'react-redux'
import { actions } from '../modules/coreLayout'

import CoreLayout from '../components/CoreLayout'

const mapStateToProps = (state) => {
  return ({
    ...state,
    breakpointRanges: state.breakpoint.ranges,
    currentBreakpointInd: state.breakpoint.current
  })
}

export default connect(mapStateToProps, actions)(CoreLayout)
