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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure minima
            ullam officia ut cum iusto veritatis in officiis, facilis ratione
            excepturi unde delectus itaque eaque vitae voluptatem, sit nobis nostrum
            consequuntur maxime pariatur, eligendi cupiditate. Quidem laborum, ut,
            autem iusto corporis illum, nesciunt eos eligendi ipsum tempore expedita,
            harum maxime.
          </p>
          <p className={classes.description}>
            Quisquam eveniet adipisci cupiditate, in eum deleniti ex suscipit error
            doloribus odio. Numquam voluptatibus fuga similique animi minima
            consectetur omnis, tempore, itaque culpa. Facilis ipsa facere voluptatibus
            enim voluptates nemo iste totam in iure sint inventore, esse voluptate
            laboriosam velit, fugit, maxime possimus itaque quidem quibusdam odit
            voluptas modi id!
          </p>
          <p className={classes.description}>
            Esse quos optio voluptatibus voluptate nostrum reprehenderit earum
            inventore. Ducimus voluptas maxime ipsum libero. Maiores aliquam, hic
            ducimus libero non distinctio vero ex provident, alias omnis! Soluta
            corporis, architecto voluptates quo beatae, facere, quasi eos laudantium
            voluptatibus quibusdam veniam consequuntur tempora nostrum porro nulla
            repudiandae quidem dolorem. Voluptates, molestiae, reprehenderit.
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
