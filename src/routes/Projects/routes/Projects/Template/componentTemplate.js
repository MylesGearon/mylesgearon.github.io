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
    // Redux props
    curBreakpoint: p.oneOfType([p.number, p.object]).isRequired,

    // Template props
    title: p.string.isRequired,
    titleSizesByBreakpoint: p.object.isRequired,
    placeholderImg: p.string.isRequired,
    img: p.string.isRequired,
    demoUrl: p.string.isRequired,
    demoText: p.string.isRequired,
    githubUrl: p.string.isRequired,
    descriptions: p.array.isRequired,
    toolNames: p.array.isRequired
  }

  constructor () {
    super()
    this.titleSizesByBreakpoint = {}
  }

  componentWillMount () {
    this.titleSizesByBreakpoint = this.props.titleSizesByBreakpoint
  }

  render () {
    // image loader refs
    const placeholder = this.props.placeholderImg
    const preloader = () => <img src={placeholder} />
    const img = this.props.img

    // title text sizing
    const text = this.props.title
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
              href={this.props.demoUrl}
              target='_blank'>
              {this.props.demoText}
            </a>
            |
            <a
              className={classes.githubLogoContainer}
              href={this.props.githubUrl}
              target='_blank'>
              <Isvg
                src={GithubLogo}
                wrapper={React.DOM.div}>
                Github Logo
              </Isvg>
            </a>
          </div>
          {this.props.descriptions.map((text, i) =>
            <p
              key={i}
              className={classes.description}
              dangerouslySetInnerHTML={{__html: text}} />
          )}

          <hr className={classes.stackRule} />
          <h2>Tools</h2>
          <div className={classes.stackContainer}>
            {this.props.toolNames.map((name, i) => {
              if (typeof name === 'string') return <Tool key={i} icon={name} show />
              return <Tool key={i} isSvg={false} icon={name[0]} show />
            })}
          </div>
        </div>
      </View>
    )
  }
}
