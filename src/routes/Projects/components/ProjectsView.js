import React from 'react'

import RandomText from '../../../components/RandomText'
import View from '../../../components/ViewWrapper'
import classes from '../styles/ProjectsView.scss'

const p = React.PropTypes

export default class ProjectsView extends React.Component {

  static propTypes = {
    children: p.node.isRequired,
    currentImage: p.number.isRequired,
    stackVisible: p.bool.isRequired,
    updateImage: p.func.isRequired,
    showStack: p.func.isRequired,
    hideStack: p.func.isRequired
  }

  render () {
    return (
      <View className={classes.container}>
        {this.props.children}
      </View>
    )
  }
}
