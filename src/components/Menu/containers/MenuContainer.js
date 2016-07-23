import { connect } from 'react-redux'

import Menu from '../components/Menu'

const mapStateToProps = state => ({
  pathname: state.router.locationBeforeTransitions.pathname
})

export default connect(mapStateToProps)(Menu)
