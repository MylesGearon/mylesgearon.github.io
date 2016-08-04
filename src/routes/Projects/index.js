import React from 'react'

import { injectReducer } from '../../store/reducers'
import ProjectsList from './routes/List'

export default store => ({
  path: 'projects',
  getComponent (nextState, cb) {
    require.ensure([], require => {
      const RootLayout = require('./layouts/ProjectsRootLayout').default
      const reducer = require('./modules/projects').default

      injectReducer(store, {key: 'projects', reducer})

      cb(null, RootLayout)
    })
  },
  indexRoute: ProjectsList,
  getChildRoutes (location, cb) {
    require.ensure([], require => {
      cb(null, [
        require('./routes/Projects/ScoreFluent').default(store),
        require('./routes/Projects/TheLearningCenter').default(store),
        require('./routes/Projects/FCCMarket').default(store),
        require('./routes/Projects/OLNC').default(store)
      ])
    })
  }
})
