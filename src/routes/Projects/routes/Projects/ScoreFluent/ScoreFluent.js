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
    const text = 'Score Fluent'
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
              href='http://score-fluent.herokuapp.com'
              target='_blank'>
              score-fluent.herokuapp.com
            </a>
            |
            <a
              className={classes.githubLogoContainer}
              href='http://github.com/mityadsch/score-fluent'
              target='_blank'>
              <Isvg
                src={GithubLogo}
                wrapper={React.DOM.div}>
                Github Logo
              </Isvg>
            </a>
          </div>
          <p className={classes.description}>
            This app was the first relatively large thing I made from scratch
            that wasn't based on a curriculum or assigned task. I made it
            because I'd been forced several times to recommend a free
            sight-reading tool online and failed to find anything that didn't
            look or perform like it hadn't been updated in years. And so far as
            I can tell it already has a few features, like unusual clefs, that
            I'd personally wanted in apps I've used (learning tenor clef is no
            fun at all).
          </p>
          <p className={classes.description}>
            It's an extremely single page application, there's not a bit of
            routing in it! The only calls to the Node server are for JWTs and
            JSON. I just love how magical it feels to login/logout without any
            kind of page refresh. The client uses React and regrettably the no
            longer maintained Flux implementation Alt. Alt was the first library
            I've been punished for using after maintenance was dropped, and I'll
            never make that mistake again!
          </p>
          <hr className={classes.stackRule} />
          <h2>Tools</h2>
          <div className={classes.stackContainer}>
            <Tool icon='react' show />
            <Tool icon='alt' show isSvg={false} />
            <Tool icon='sass' show />
            <Tool icon='mongodb' show />
            <Tool icon='passport' show />
            <Tool icon='es6' show />
            <Tool icon='node' show />
            <Tool icon='express' show />
            <Tool icon='gulp' show />
            <Tool icon='webpack' show />
            <Tool icon='lodash' show />
            <Tool icon='heroku' show />
          </div>
        </div>
      </View>
    )
  }
}
