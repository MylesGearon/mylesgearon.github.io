import React from 'react'
import Isvg from 'react-inlinesvg'
import ImageLoader from 'react-imageloader'

import View from '../../../../../components/ViewWrapper'
import RandomText from '../../../../../components/RandomText'
import Tool from '../../../components/Tool'
import classes from '../../../styles/Project.scss'

import GithubLogo from '../../../assets/github.svg'

const p = React.PropTypes

export default class ScoreFluent extends React.Component {

  static propTypes = {
    curBreakpoint: p.oneOfType([p.number, p.object]).isRequired
  }

  constructor () {
    super()
    this.titleSizesByBreakpoint = {
      0: {
        fontHeight: 18
      },
      1: {
        fontHeight: 25
      },
      2: {
        fontHeight: 32
      },
      3: {
        fontHeight: 40
      },
      4: {
        fontHeight: 45
      },
      5: {
        fontHeight: 48
      }
    }
  }

  render () {
    // image loader refs
    const placeholder = require('./assets/1-placeholder.png')
    const preloader = () => <img src={placeholder} />
    const img = require('./assets/1.png')

    // title text sizing
    const text = 'Ouding Legal Nurse Consulting'
    const randomTextFontHeight = this.titleSizesByBreakpoint[this.props.curBreakpoint].fontHeight
    const randomTextWidth = randomTextFontHeight / 2 * text.length

    return (
      <View className={classes.mainContainer}>
        <div className={classes.projectContainer}>
          <RandomText
            text={text}
            className={classes.title}
            width={randomTextWidth}
            fontHeight={randomTextFontHeight}
            animationSpeed={1300}
            animationDuration={2000}
            animate='in' />
          <ImageLoader
            className={classes.imageWrap}
            wrapper={React.DOM.div}
            preloader={preloader}
            src={img} />
          <div className={classes.linksContainer}>
            <a
              className={classes.siteLink}
              href='http://oudinglegalnurse.com'
              target='_blank'>
              oudinglegalnurse.com
            </a>
            |
            <a
              className={classes.githubLogoContainer}
              href='http://github.com/mityadsch/OLNC3'
              target='_blank'>
              <Isvg
                src={GithubLogo}
                wrapper={React.DOM.div}>
                Github Logo
              </Isvg>
            </a>
          </div>
          <p className={classes.description}>
            This is the very first website I ever made, and I've got to say, I
            think it holds up decently in that context! I was asked to make a
            neutral design and logo as well as a fully responsive site. And
            simple as it may be, it seems to do that well.
          </p>
          <hr className={classes.stackRule} />
          <h2>Tools</h2>
          <div className={classes.stackContainer}>
            <Tool icon='jquery' show />
            <Tool icon='grunt' show />
          </div>
        </div>
      </View>
    )
  }
}
