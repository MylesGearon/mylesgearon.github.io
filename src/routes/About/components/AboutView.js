import React from 'react'

import RandomText from '../../../components/RandomText'
import View from '../../../components/ViewWrapper'
import classes from '../AboutView.scss'

const p = React.PropTypes

const titleAnimationDuration = 2000
const paragraphs = [
  `Lorem ipsum dolor sit amet, consectetur
  adipisicing elit. Reiciendis, suscipit ea. Non repellat in modi
  aliquam hic, quos facilis natus totam ducimus. Debitis voluptate
  dignissimos porro hic officiis nesciunt iure harum animi reiciendis
  veritatis autem dolore praesentium aut nobis sequi similique, nam est
  optio ipsum. Error suscipit numquam officiis, voluptate nam id maxime
  expedita quidem ex debitis eum iusto sit!`,

  `Lorem ipsum dolor sit amet, consectetur
  adipisicing elit. Reiciendis, suscipit ea. Non repellat in modi
  aliquam hic, quos facilis natus totam ducimus. Debitis voluptate
  dignissimos porro hic officiis nesciunt iure harum animi reiciendis
  veritatis autem dolore praesentium aut nobis sequi similique, nam est
  optio ipsum. Error suscipit numquam officiis, voluptate nam id maxime
  expedita quidem ex debitis eum iusto sit!`,

  `Lorem ipsum dolor sit amet, consectetur
  adipisicing elit. Reiciendis, suscipit ea. Non repellat in modi
  aliquam hic, quos facilis natus totam ducimus. Debitis voluptate
  dignissimos porro hic officiis nesciunt iure harum animi reiciendis
  veritatis autem dolore praesentium aut nobis sequi similique, nam est
  optio ipsum. Error suscipit numquam officiis, voluptate nam id maxime
  expedita quidem ex debitis eum iusto sit!`,

  `Lorem ipsum dolor sit amet, consectetur
  adipisicing elit. Reiciendis, suscipit ea. Non repellat in modi
  aliquam hic, quos facilis natus totam ducimus. Debitis voluptate
  dignissimos porro hic officiis nesciunt iure harum animi reiciendis
  veritatis autem dolore praesentium aut nobis sequi similique, nam est
  optio ipsum. Error suscipit numquam officiis, voluptate nam id maxime
  expedita quidem ex debitis eum iusto sit!`
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
            text='About Myles'
            className={classes.title}
            width={titleSizes.width}
            fontHeight={titleSizes.fontHeight}
            animationSpeed={1300}
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
