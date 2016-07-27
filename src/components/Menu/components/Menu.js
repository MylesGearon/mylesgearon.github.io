import React, { PropTypes as p } from 'react'
import TransitionGroup from 'react-addons-css-transition-group'

import Header from './Header'
import headerClasses from '../styles/Header.scss'
import Pulldown from './Pulldown'
import pulldownClasses from '../styles/Pulldown.scss'

export default class Menu extends React.Component {

  static propTypes = {
    route: p.object.isRequired,
    breakpoint: p.array.isRequired,
    visible: p.bool.isRequired,
    expanded: p.bool.isRequired,
    expandMenu: p.func.isRequired,
    closeMenu: p.func.isRequired
  }

  constructor () {
    super()
    this.state = {
      menuStyle: null
    }
  }

  componentWillMount () {
    this.setState({menuStyle: this._getMenuStyle(this.props.breakpoint)})
  }

  componentWillReceiveProps (nextProps) {
    const nextStyle = this._getMenuStyle(nextProps.breakpoint)
    if (this.state.menuStyle === 'large' && nextStyle === 'small') {
      this.props.closeMenu()
    }
    if (this.state.menuStyle !== nextStyle) {
      this.setState({menuStyle: nextStyle})
    }
  }

  render () {
    let curMenu, classes, lastClasses, transitionProps
    if (!this.props.visible) {
      return null
    }
    if (this.state.menuStyle === 'small') {
      curMenu = <Header key='header' />
      classes = headerClasses
      lastClasses = pulldownClasses
    } else if (this.state.menuStyle === 'large') {
      curMenu = <Pulldown key='pulldown'
        expanded={this.props.expanded}
        expandMenu={this.props.expandMenu}
        closeMenu={this.props.closeMenu} />
      classes = pulldownClasses
      lastClasses = headerClasses
    }

    transitionProps = {
      transitionName: {
        appear: classes.appear,
        appearActive: classes.appearActive,
        enter: classes.enter,
        enterActive: classes.enterActive,
        // Use classes of last menu style, we just changed classes!
        leave: lastClasses.leave,
        leaveActive: lastClasses.leaveActive
      },
      transitionAppear: true,
      transitionAppearTimeout: 1000,
      transitionEnterTimeout: 2000,
      transitionLeaveTimeout: lastClasses === pulldownClasses ? 500 : 1000
    }
    return (
      <TransitionGroup
        {...transitionProps}>
        {curMenu}
      </TransitionGroup>
    )
  }

  _getMenuStyle (breakpoint) {
    if (breakpoint[1] <= 700) return 'small'
    else return 'large'
  }

}

export default Menu
