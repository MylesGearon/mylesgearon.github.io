import React from 'react'
import Menu from '../../components/Menu'
import classes from './CoreLayout.scss'
import '../../styles/core.scss'

export default class CoreLayout extends React.Component {

  static propTypes = {
    children: React.PropTypes.element.isRequired
  }

  render () {
    return (
      <div className={classes.container}>
        <Menu {...this.props} />
        <div className={classes.mainContainer}>
          {this.props.children}
        </div>
      </div>
    )
  }
}
