import React from 'react'
const p = React.PropTypes

import classes from '../randomText.scss'

export default class Letter extends React.Component {

  static propTypes = {
    x: p.number.isRequired,
    y: p.number.isRequired,
    char: p.string.isRequired,
    fontHeight: p.number.isRequired,
    numKeyframes: p.number.isRequired,
    animate: p.oneOf(['in', 'out']),
    animationSpeed: p.number.isRequired,
    animationRandomness: p.number.isRequired,
    animationStart: p.number.isRequired
  }

  constructor () {
    super()
    this.state = {
      show: false
    }
  }

  componentDidMount () {
    if (this.props.animate === 'in') {
      this._fadeIn()
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.animate === 'in') {
      this._fadeIn()
    } else {
      this._fadeOut()
    }
  }

  shouldComponentUpdate (nextProps, nextState) {
    return nextState.fade !== this.state.fade || nextState.show !== this.state.show
  }

  // render component and animate in
  _fadeIn () {
    setTimeout(() => {
      this.setState({
        fade: 'in',
        show: true
      })
    }, this.props.animationStart + Math.random() * this.props.animationSpeed * this.props.animationRandomness)
  }

  // animate out then stop rendering
  _fadeOut () {
    setTimeout(() => {
      this.setState({fade: 'out'})
      setTimeout(() => {
        this.setState({ show: false })
      }, this.props.animationSpeed)
    }, this.props.animationStart + Math.random() * this.props.animationSpeed * this.props.animationRandomness)
  }

  render () {
    if (!this.state.show) {
      return null
    }
    const keyframe = Math.floor(Math.random() * this.props.numKeyframes + 1)
    return (
      <div
        className={classes.letter}
        style={{
          fontSize: this.props.fontHeight,
          height: this.props.fontHeight,
          width: this.props.fontHeight / 2,
          left: this.props.x,
          top: this.props.y,
          animation: `
            ${classes['fade-' + this.state.fade + '-' + keyframe]}
            cubic-bezier(.85,0,.54,1)
            ${this.props.animationSpeed}ms forwards`
        }}
        >{this.props.char}</div>
    )
  }
}
