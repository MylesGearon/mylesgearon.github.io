import { injectReducer } from '../../store/reducers'
import reducer from './modules/menu'

import MenuContainer from './containers/MenuContainer'

export default store => {
  injectReducer(store.store, { key: 'menu', reducer })
  return MenuContainer
}
