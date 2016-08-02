import { connect } from 'react-redux'
import { updateImage, showStack, hideStack } from '../modules/projects'

import ProjectsView from '../components/ProjectsView'

const mapStateToProps = state => {
  return ({
    currentImage: state.projects.currentImage,
    stackVisible: state.projects.stackVisible
  })
}

const mapDispatchToProps = {
  updateImage,
  showStack,
  hideStack
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsView)
