import { connect } from 'react-redux'
import { actions } from '../../../components/Menu/modules/menu'

import HomeView from '../components/HomeView'

export default connect(state => state, {animateInMenu: actions.animateInMenu})(HomeView)
