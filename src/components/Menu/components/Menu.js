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
    let curMenu, classes, lastClasses, transitionProps
    if (this.props.currentMenuStyle === 'small') {
      curMenu = <Header key='header' />
      classes = headerClasses
      lastClasses = pulldownClasses
    } else if (this.props.currentMenuStyle === 'large') {
      curMenu = <Pulldown key='pulldown' {...this.props} />
      classes = pulldownClasses
      lastClasses = headerClasses
    } else {
      return null
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
