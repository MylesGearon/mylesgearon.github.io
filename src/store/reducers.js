import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import menu from '../components/Menu/modules/menu'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    // Add sync reducers here
    menu,
    router,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
