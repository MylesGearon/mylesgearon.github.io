import React from 'react'
import RandomText from '../../../components/RandomText'

import classes from './HomeView.scss'

export default class HomeView extends React.Component {

  constructor () {
    super()
    this.state = {
      animateDescription: 'out'
    }

    this.timeouts = []
  }

  componentDidMount () {
    this.timeouts.push(setTimeout(() => {
      this.setState({animateDescription: 'in'})
    }, 3000))
  }

  componentWillUnmount () {
    this.timeouts.forEach(timeout => clearTimeout(timeout))
  }

  render () {
    return (
      <div className={classes.container}>
        <RandomText
          text="Hi, I'm Myles"
          width={180}
          fontHeight={50}
          animationSpeed={1000}
          animationDuration={2500}
          animate='in' />
        <br />
        <RandomText
          text="I'm a self-taught web developer from Chicago."
          width={170}
          fontHeight={18}
          animationSpeed={400}
          animationRandomness={0}
          animationDuration={2500}
          animate={this.state.animateDescription} />
      </div>
    )
  }
}
