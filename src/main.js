import bowser from 'bowser'
import React from 'react'
import ReactDOM from 'react-dom'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import { useRouterHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import createStore from './store/createStore'
import AppContainer from './containers/AppContainer'

// ========================================================
// Alert if using outdated browser
// ========================================================
console.log(bowser)
const unsupportedBrowserTests = [
  bowser.msie && bowser.version < 11,
  bowser.msie && bowser.mobile,
  bowser.msedge && bowser.version < 13,
  bowser.safari && bowser.version < 6,
  bowser.opera && bowser.version < 15,
  bowser.opera && bowser.mobile,
  bowser.firefox && bowser.version < 35,
  bowser.chrome && bowser.version < 26,
  bowser.android && bowser.verson < 4.4
]
const unsupported = unsupportedBrowserTests.filter(test => test)
if (unsupported.length != 0) {
  alert(`Your browser is outdated, for a better experience here (and everywhere on the web), consider updating it and using Chrome or Firefox. http://outdatedbrowser.com/en`)
}

// ========================================================
// Browser History Setup
// ========================================================
const browserHistory = useRouterHistory(createBrowserHistory)({
  basename: __BASENAME__
})

// ========================================================
// Store and History Instantiation
// ========================================================
// Create redux store and sync with react-router-redux. We have installed the
// react-router-redux reducer under the routerKey "router" in src/routes/index.js,
// so we need to provide a custom `selectLocationState` to inform
// react-router-redux of its location.
const initialState = window.___INITIAL_STATE__
const store = createStore(initialState, browserHistory)
const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: (state) => state.router
})

// ========================================================
// Render Setup
// ========================================================
const MOUNT_NODE = document.getElementById('root')

let render = () => {
  const routes = require('./routes/index').default(store)

  ReactDOM.render(
    <AppContainer
      store={store}
      history={history}
      routes={routes}
    />,
    MOUNT_NODE
  )
}

// This code is excluded from production bundle
if (__DEV__) {
  if (module.hot) {
    // Development render functions
    const renderApp = render
    const renderError = (error) => {
      const RedBox = require('redbox-react').default
      const style = require('../config/redboxStyles.js').default
      ReactDOM.render(<RedBox error={error} style={style} />, MOUNT_NODE)
    }

    // Wrap render in try/catch
    render = () => {
      try {
        renderApp()
      } catch (error) {
        renderError(error)
      }
    }

    // Setup hot module replacement
    module.hot.accept('./routes/index', () => {
      setTimeout(() => {
        ReactDOM.unmountComponentAtNode(MOUNT_NODE)
        render()
      })
    })
  }
}

// ========================================================
// Go!
// ========================================================
render()
