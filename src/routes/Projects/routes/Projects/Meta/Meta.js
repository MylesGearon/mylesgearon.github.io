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
        fontHeight: 30
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
    const text = 'mylesgearon.com'
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
              href='http://mylesgearon.com'
              target='_blank'>
              mylesgearon.com
            </a>
            |
            <a
              className={classes.githubLogoContainer}
              href='http://github.com/mityadsch/mityadsch.github.io'
              target='_blank'>
              <Isvg
                src={GithubLogo}
                wrapper={React.DOM.div}>
                Github Logo
              </Isvg>
            </a>
          </div>
          <p className={classes.description}>
            I began learning web dev using FreeCodeCamp's curriculum; and one of
            the very fist things they have you do is create a portfolio site
            (this is their <a
            href="https://codepen.io/FreeCodeCamp/pen/YqLyXB">example</a>).  I
            passed up that assignment and finished nearly the entire curriculum
            before putting much thought into making my own because I wanted to
            know everything possible before I started it, I needed to have the
            heavens open up in praise when I pushed it to production. And that's
            how I ended up not having a portfolio for a year. Oops. One of the
            most valuable things I've learned recently is the idea of  <a
            href="http://blog.crisp.se/2016/01/25/henrikkniberg/making-sense-of-mvp">Minimum
            Viable Product</a> instead of trying to perfect everything about a
            project on the first pass. So here we are, warts and all (looking at
            you (with great resentment) IE), but polish is doable.
          </p>
          <p className={classes.description}>
            At the end of this project I wanted to feel like I'd really wrapped
            my head around all of the fundamental React tools, so I learned some
            React Router and Redux then used the wonderful boilerplate <a
            href="https://github.com/davezuko/react-redux-starter-kit#features">
            React Redux Starter Kit</a> which had me learn some Koa, testing
            tools, and CSS Modules besides.
          </p>
          <p className={classes.description}>
            I also got to use Webpack with React Router to do some nifty (and
            really functionally unecessary) code splitting so only the code
            necessary to render a particular route is loaded, and all of the
            rest is lazy loaded as you navigate. What's more I don't even need a live server to
            do any of that, so I rigged up a way to build and push the whole
            project to Github Pages with just one command! If you're looking
            closely I know you're wondering why in the world I used a monospace
            font all over the place. I actually manually flow the text in all of
            those crazy animating blocks of text, and monospace fonts let me
            keep a bit more sanity in that code.
          </p>
          <hr className={classes.stackRule} />
          <h2>Tools</h2>
          <div className={classes.stackContainer}>
            <Tool icon='react' show />
            <Tool icon='redux' show />
            <Tool icon='react-router' show />
            <Tool icon='sass' show />
            <Tool icon='es6' show />
            <Tool icon='webpack' show />
          </div>
        </div>
      </View>
    )
  }
}
