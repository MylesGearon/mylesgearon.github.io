import React, { PropTypes as p } from 'react'
import TransitionGroup from 'react-addons-css-transition-group'

import Header from './Header'
import headerClasses from '../styles/Header.scss'
import Pulldown from './Pulldown'
import pulldownClasses from '../styles/Pulldown.scss'

const menuStyleBreakpoint = 700

export default class Menu extends React.Component {

  static propTypes = {
    route: p.object.isRequired,
    currentMenuStyle: p.oneOfType([p.string, p.object]),
    animateInMenu: p.func.isRequired
  }

  // --------------------------------------------------------------------------
  // Lifecycle
  // --------------------------------------------------------------------------

  componentWillMount () {
    this._setupResizeListener()

    if (this._getWindowWidth() > menuStyleBreakpoint) {
      this.props.animateInMenu('large')
    } else {
      this.props.animateInMenu('small')
    }
  }

  render () {
    let curMenu, classes
    if (this.props.currentMenuStyle === 'small') {
      curMenu = <Header key='header' />
      classes = headerClasses
      transitions
    } else if (this.props.currentMenuStyle === 'large') {
      curMenu = <Pulldown key='pulldown' />
      classes = pulldownClasses
    } else {
      return null
    }
    const transitions = {
      appear: classes.appear,
      appearActive: classes.appearActive,
      enter: classes.enter,
      enterActive: classes.enterActive,
      leave: classes.leave,
      leaveActive: classes.leaveActive
    }
    return (
      <TransitionGroup
        transitionName={transitions}
        transitionAppear
        transitionAppearTimeout={1000}
        transitionEnterTimeout={1000}
        transitionLeaveTimeout={250}>
        {curMenu}
      </TransitionGroup>
    )
  }

  // --------------------------------------------------------------------------
  // Custom Methods
  // --------------------------------------------------------------------------

  _getWindowWidth () {
    return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
  }

  _setupResizeListener () {
    // Create "window.throttledResize" event that listens to resize and throttles it to fire once per frame at most
    // https://developer.mozilla.org/en-US/docs/Web/Events/resize#requestAnimationFrame_customEvent
    let running = false
    const throttleResize = () => {
      if (!running) {
        running = true
        requestAnimationFrame(() => {
          window.dispatchEvent(new CustomEvent('throttledResize'))
          running = false
        })
      }
    }
    window.addEventListener('resize', throttleResize)
    window.addEventListener('throttledResize', this._handleResize.bind(this))
  }

  _handleResize () {
    if (this._getWindowWidth() > menuStyleBreakpoint) {
      if (this.props.currentMenuStyle === 'small') this.props.animateInMenu('large')
    } else {
      if (this.props.currentMenuStyle === 'large') this.props.animateInMenu('small')
    }
  }

}

export default Menu
