import React, { PropTypes as p } from 'react'

import Header from './Header.js'
import Pulldown from './Pulldown.js'

const menuStyleBreakpoint = 700

export default class Menu extends React.Component {

  static propTypes = {
    route: p.object.isRequired,
    currentMenuStyle: p.oneOfType([p.string, p.object]),
    nextMenuStyle: p.oneOfType([p.string, p.object]),
    animatingMenu: p.bool,
    animateInMenu: p.func.isRequired,
    animateOutMenu: p.func.isRequired,
    finishAnimation: p.func.isRequired
  }

  // --------------------------------------------------------------------------
  // Lifecycle
  // --------------------------------------------------------------------------

  componentWillMount () {
    this._setupResizeListener()

    if (this._getWindowWidth() > menuStyleBreakpoint) {
      this.props.animateInMenu('large')
      setTimeout(() => {
        this.props.finishAnimation()
      }, 0)
    } else {
      this.props.animateInMenu('small')
      setTimeout(() => {
        this.props.finishAnimation()
      }, 0)
    }
  }

  render () {
    if (this.props.currentMenuStyle === 'small') {
      return <Header fade={this.props.animatingMenu} />
    } else {
      return <Pulldown fade={this.props.animatingMenu} />
    }
  }

  // --------------------------------------------------------------------------
  // Custom Methods
  // --------------------------------------------------------------------------

  _getWindowWidth () {
    return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
  }

  _setupResizeListener () {
    // Create "window.throttledResize" event that fires per frame max
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
      console.log('large menu')
    } else {
      console.log('small menu')
    }
  }

}

export default Menu
