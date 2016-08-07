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
    const text = 'The Learning Center'
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
              href='http://thelearningcenter.github.io'
              target='_blank'>
              thelearningcenter.github.io
            </a>
            |
            <a
              className={classes.githubLogoContainer}
              href='http://github.com/thelearningcenter/thelearningcenter.github.io'
              target='_blank'>
              <Isvg
                src={GithubLogo}
                wrapper={React.DOM.div}>
                Github Logo
              </Isvg>
            </a>
          </div>
          <p className={classes.description}>
            The Learning Center is a great nonprofit in my neighborhood I've
            been volunteering at for about a year. When I mentioned that I make
            websites we decided that theirs was due for an update. But there
            were a few rather crazy constraints I had to work with:

            <ul>
              <li>given the budget cuts from the state, they needed to be able
              to host their site for free</li>
              <li>they wanted more control over the layout and design of the
              site than something like Google Sites offers</li>
              <li>they wanted to be able to update more than just the text of
              the site with minimal technical investment in case I got hit by a
              bus</li>
            </ul>
          </p>
          <p className={classes.description}>
            Given those limitations, the only thing way I could imagine getting
            the site up was by hosting it on Github Pages and using no tools
            less common than jQuery. Since I couldn't expect them to keep a
            development environment set up I had to rely on Github to build the
            site, and Github only runs a rather small subset of what Jekyll can
            do. So, with my hands thusly tied, I plugged away with my hands
            until we realized that the updating process was still a bit too
            technical to expect to hand off in a world filled with buses. So,
            for now, it sits in stasis filled with lorem text. I'm still pretty
            proud of how I worked with limitations.
          </p>
          <hr className={classes.stackRule} />
          <h2>Tools</h2>
          <div className={classes.stackContainer}>
            <Tool icon='jquery' show />
            <Tool icon='jekyll' show />
            <Tool icon='scrollmagic' show isSvg={false} />
            <Tool icon='sass' show />
          </div>
        </div>
      </View>
    )
  }
}
