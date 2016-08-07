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
        fontHeight: 35
      },
      1: {
        fontHeight: 40
      },
      2: {
        fontHeight: 50
      },
      3: {
        fontHeight: 60
      },
      4: {
        fontHeight: 60
      },
      5: {
        fontHeight: 60
      }
    }
  }

  render () {
    // image loader refs
    const placeholder = require('./assets/1-placeholder.png')
    const preloader = () => <img src={placeholder} />
    const img = require('./assets/1.png')

    // title text sizing
    const text = 'FCC Market'
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
              href='http://fcc-market.herokuapp.com'
              target='_blank'>
              fcc-market.herokuapp.com
            </a>
            |
            <a
              className={classes.githubLogoContainer}
              href='http://github.com/mityadsch/fcc-market'
              target='_blank'>
              <Isvg
                src={GithubLogo}
                wrapper={React.DOM.div}>
                Github Logo
              </Isvg>
            </a>
          </div>
          <p className={classes.description}>
            This is one of <a href="http://fcc-bars.herokuapp.com/"
            target="_blank">many</a> <a href="http://fcc-bars.herokuapp.com/"
            target="_blank">FreeCodeCamp</a> <a
            href="http://freecodecamp.com/mityadsch"
            target="_blank">Projects</a> I've completed. I choose to show it
            here because it uses a bunch of interesting tools that I haven't
            used elsewhere like Socket.IO and Bootstrap. That's all.
          </p>
          <hr className={classes.stackRule} />
          <h2>Tools</h2>
          <div className={classes.stackContainer}>
            <Tool icon='jquery' show />
            <Tool icon='react' show />
            <Tool icon='socketio' show />
            <Tool icon='heroku' show />
            <Tool icon='mongodb' show />
            <Tool icon='node' show />
            <Tool icon='d3' show />
            <Tool icon='bootstrap' show />
          </div>
        </div>
      </View>
    )
  }
}
