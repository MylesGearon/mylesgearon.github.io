import { connect } from 'react-redux'
import { actions } from '../modules/menu'

import Menu from '../components/Menu'

const mapStateToProps = state => {
  return ({
    currentMenuStyle: state.menu.current,
    expanded: state.menu.expanded,
    breakpoint: state.breakpoint.current === null ? null : state.breakpoint.ranges[state.breakpoint.current]
  })
}

export default connect(mapStateToProps, actions)(Menu)
