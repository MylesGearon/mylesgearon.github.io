import { injectReducer } from '../../store/reducers'
import ProjectsList from './routes/List'

export default store => ({
  path: 'projects',
  indexRoute: ProjectsList,
  getChildRoutes (location, cb) {
    require.ensure([], require => {
      cb(null, [
        require('./routes/Projects/Apple').default(store),
        require('./routes/Projects/JobBooks').default(store),
        require('./routes/Projects/DomeHA').default(store),
        require('./routes/Projects/Meta').default(store),
        require('./routes/Projects/ScoreFluent').default(store),
        require('./routes/Projects/TheLearningCenter').default(store),
        require('./routes/Projects/FCCMarket').default(store),
        require('./routes/Projects/OLNC').default(store)
      ])
    })
  }
})
