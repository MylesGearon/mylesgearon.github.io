import React from 'react'

import RandomText from '../../../components/RandomText'
import View from '../../../components/ViewWrapper'
import classes from '../AboutView.scss'

const p = React.PropTypes

const titleAnimationDuration = 2000
const paragraphs = [
  `I'm just a giant nerd who's constantly in awe of technology. I love the
  tangibility and craftsmanship of working on the web, so I'm looking for my
  first apprenticeship or junior position in web tech.`,

  `My programming skills center around JavaScript, and I'm comfortable with
  everything from fundamentals to tools like Node and MongoDB. And of course,
  CSS and HTML come with that. Most of my work is in the MERN stack, though I've
  also dabbled in Python and Java in academic contexts, and I'm planning to pick
  up Ruby next. I'm always happy to adopt a new tool because at least half the
  reason I do web dev is because I get an inordinate amount of joy out of having
  a shiny new technology to play with.`,

  `When I'm not sitting in front of a screen I sink most of my time into
  generalist nerdery, becoming a less awful pianist/baritone/cellist, tutoring
  STEM topics, or getting very - often tragically - ambitious with an oven.`
]

export default class AboutView extends React.Component {

  static propTypes = {
    curBreakpoint: p.oneOfType([p.number, p.object]).isRequired
  }

  constructor () {
    super()
    this.state = {
      // Make an array w/ length paragraphs filled w/ false
      showParagraphs: paragraphs.map(() => false)
    }

    this.timeouts = []
    this.sizesByBreakpoint = {
      0: {
        width: 250,
        fontHeight: 40
      },
      1: {
        width: 300,
        fontHeight: 50
      },
      2: {
        width: 400,
        fontHeight: 60
      },
      3: {
        width: 400,
        fontHeight: 60
      },
      4: {
        width: 400,
        fontHeight: 60
      },
      5: {
        width: 430,
        fontHeight: 65
      }
    }
  }

  componentDidMount () {
    // Cascade showParagraphs to true in 500ms delays after title animation
    this.state.showParagraphs.forEach((paragraph, i) => {
      this.timeouts.push(setTimeout(() => {
        const showParagraphs = this.state.showParagraphs
        showParagraphs[i] = true
        this.setState({showParagraphs})
      }, titleAnimationDuration + 500 + i * 500))
    })
  }

  componentWillUnmount () {
    this.timeouts.forEach(timeoutId => clearTimeout(timeoutId))
  }

  render () {
    const titleSizes = this.sizesByBreakpoint[this.props.curBreakpoint]
    return (
      <View className={classes.container}>
        <div className={classes.textContainer}>
          <RandomText
            text='About Me'
            className={classes.title}
            width={titleSizes.width}
            fontHeight={titleSizes.fontHeight}
            animationSpeed={1200}
            animationRandomness={.3}
            animationDuration={titleAnimationDuration}
            animate='in' />

          {paragraphs.map((text, i) => (
            <p
              className={classes.body + ' ' + (this.state.showParagraphs[i] ? classes.showParagraph : '')}
              key={i}>
              {paragraphs[i]}
            </p>
          ))}
        </div>
      </View>
    )
  }
}
