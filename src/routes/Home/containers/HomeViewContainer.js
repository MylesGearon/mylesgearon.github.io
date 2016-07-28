import { connect } from 'react-redux'
import { actions } from '../../../components/Menu/modules/menu'

import HomeView from '../components/HomeView'

const mapStateToProps = state => {
  return ({
    menuVisible: state.menu.visible
  })
}

export default connect(mapStateToProps, {animateInMenu: actions.animateInMenu})(HomeView)
