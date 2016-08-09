import React from 'react'

import View from '../../../components/ViewWrapper'
import RandomText from '../../../components/RandomText'

import classes from '../HomeView.scss'

const firstAnimationDuration = 2000
const animationPause = 300
const secondAnimationDuration = 2500

const p = React.PropTypes

export default class HomeView extends React.Component {

  static propTypes = {
    menuVisible: p.bool.isRequired,
    curBreakpoint: p.oneOfType([p.number, p.object]).isRequired,
    animateInMenu: p.func.isRequired
  }

  constructor () {
    super()
    this.state = {
      animateDescription: 'out'
    }

    this.timeouts = []
    this.sizesByBreakpoint = {
      0: {
        title: {
          width: 180,
          fontHeight: 50
        },
        subtitle: {
          width: 180,
          fontHeight: 18
        }
      },
      1: {
        title: {
          width: 210,
          fontHeight: 55
        },
        subtitle: {
          width: 180,
          fontHeight: 18
        }
      },
      2: {
        title: {
          width: 400,
          fontHeight: 60
        },
        subtitle: {
          width: 270,
          fontHeight: 18
        }
      },
      3: {
        title: {
          width: 400,
          fontHeight: 60
        },
        subtitle: {
          width: 290,
          fontHeight: 20
        }
      },
      4: {
        title: {
          width: 400,
          fontHeight: 60
        },
        subtitle: {
          width: 380,
          fontHeight: 20
        }
      },
      5: {
        title: {
          width: 430,
          fontHeight: 65
        },
        subtitle: {
          width: 500,
          fontHeight: 22
        }
      }
    }
  }

  componentDidMount () {
    // Animate in subtext
    this.timeouts.push(setTimeout(() => {
      this.setState({animateDescription: 'in'})
    }, firstAnimationDuration + animationPause))
    // Animate inmenu
    this.timeouts.push(setTimeout(() => {
      if (!this.props.menuVisible) this.props.animateInMenu()
    }, firstAnimationDuration + secondAnimationDuration + animationPause + 500))
  }

  componentWillUnmount () {
    if (!this.props.menuVisible) this.props.animateInMenu()
    this.timeouts.forEach(timeout => clearTimeout(timeout))
  }

  shouldComponentUpdate (nextProps, nextState) {
    return (
      nextState.animateDescription !== this.state.animateDescription ||
      nextProps.curBreakpoint !== this.props.curBreakpoint
    )
  }

  render () {
    const titleSizes = this.sizesByBreakpoint[this.props.curBreakpoint].title
    const subtitleSizes = this.sizesByBreakpoint[this.props.curBreakpoint].subtitle
    return (
      <View>
        <div className={classes.textContainer}>
          <RandomText
            text="Hi, I'm Myles"
            width={titleSizes.width}
            fontHeight={titleSizes.fontHeight}
            animationSpeed={1000}
            animationDuration={firstAnimationDuration}
            animate='in' />
          <br />
          <RandomText
            text="I'm a Chicago-Based Fullstack Web Dev."
            width={subtitleSizes.width}
            fontHeight={subtitleSizes.fontHeight}
            animationSpeed={600}
            animationRandomness={0}
            animationDuration={secondAnimationDuration}
            animate={this.state.animateDescription} />
        </div>
      </View>
    )
  }
}
