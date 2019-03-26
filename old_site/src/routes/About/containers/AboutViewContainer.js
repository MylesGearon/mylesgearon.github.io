import { connect } from 'react-redux'

import AboutView from '../components/AboutView'

const mapStateToProps = state => {
  return ({
    curBreakpoint: state.breakpoint.current,
    menuVisible: state.menu.visible
  })
}

export default connect(mapStateToProps, {})(AboutView)
