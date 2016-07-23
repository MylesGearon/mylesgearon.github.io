import { connect } from 'react-redux'
import { actions } from '../modules/menu'

import Menu from '../components/Menu'

const mapStateToProps = state => {
  return ({
    currentMenuStyle: state.menu.current,
    nextMenuStyle: state.menu.next,
    animatingMenu: state.menu.animating
  })
}

const mapDispatchToProps = actions
export default connect(mapStateToProps, mapDispatchToProps)(Menu)
