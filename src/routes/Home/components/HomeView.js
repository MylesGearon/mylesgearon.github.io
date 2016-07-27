import React from 'react'
import RandomText from '../../../components/RandomText'

import classes from './HomeView.scss'

const firstAnimationDuration = 2000
const animationPause = 700
const secondAnimationDuration = 2500

export default class HomeView extends React.Component {

  static propTypes = {
    animateInMenu: React.PropTypes.func.isRequired
  }

  constructor () {
    super()
    this.state = {
      animateDescription: 'out'
    }

    this.timeouts = []
  }

  componentDidMount () {
    // Animate in subtext
    this.timeouts.push(setTimeout(() => {
      this.setState({animateDescription: 'in'})
    }, firstAnimationDuration + animationPause))
    // Animate inmenu
    this.timeouts.push(setTimeout(() => {
      this.props.animateInMenu()
    }, firstAnimationDuration + secondAnimationDuration + animationPause + 500))
  }

  componentWillUnmount () {
    this.props.animateInMenu()
    this.timeouts.forEach(timeout => clearTimeout(timeout))
  }

  shouldComponentUpdate (nextProps, nextState) {
    return nextState.animateDescription !== this.state.animateDescription
  }

  render () {
    return (
      <div className={classes.container}>
        <RandomText
          text="Hi, I'm Myles"
          width={180}
          fontHeight={50}
          animationSpeed={1000}
          animationDuration={firstAnimationDuration}
          animate='in' />
        <br />
        <RandomText
          text="I'm a self-taught web developer from Chicago."
          width={170}
          fontHeight={18}
          animationSpeed={400}
          animationRandomness={0}
          animationDuration={secondAnimationDuration}
          animate={this.state.animateDescription} />
      </div>
    )
  }
}
