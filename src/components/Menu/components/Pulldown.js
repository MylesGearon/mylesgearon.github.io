import React from 'react'
import Isvg from 'react-inlinesvg'
import RandomText from '../../RandomText'
import { IndexLink, Link } from 'react-router'

import classes from '../styles/Pulldown.scss'

import EmbeddingLogo from '../assets/embeddingLogo.svg'
import FallbackLogo from '../assets/logo.svg'

const p = React.PropTypes

export default class Pulldown extends React.Component {

  static propTypes = {
    expandMenu: p.func.isRequired,
    closeMenu: p.func.isRequired,
    expanded: p.bool.isRequired
  }

  constructor () {
    super()
    this.state = {
      animating: false
    }
    this.animationDuration = 3000
    this.timeouts = []
  }

  componentWillUnmount () {
    this.timeouts.forEach(timeout => clearTimeout(timeout))
  }

  render () {
    const fontHeight = 22
    const links = [
      {
        type: IndexLink,
        text: 'Home'
      },
      {
        type: Link,
        text: 'About'
      },
      {
        type: Link,
        text: 'Projects'
      },
      {
        type: Link,
        text: 'Contact'
      }
    ]
    return (
      <nav
        role='navigation'
        onClick={this._toggleMenu.bind(this)}
        className={classes.container}>
        <Isvg
          src={EmbeddingLogo}
          wrapper={React.DOM.a}
          className={classes.logo}>
          <img
            alt='Myles Gearon Logo'
            src={FallbackLogo} />
        </Isvg>
        <div
          className={classes.linkContainer + (this.props.expanded ? ' ' + classes.active : '')}
          style={{
            width: links.reduce((a, b) => a.text.length > b.text.length ? a : b).text.length * fontHeight / 2
          }}>
          {links.map((link, ind) => (
            <link.type
              to={link.type === IndexLink ? '/' : `/${link.text.toLowerCase()}`}
              key={ind}
              style={{width: link.text.length * fontHeight / 2}}
              className={classes.link + (this.props.expanded ? ' ' + classes.active : '')}
              activeClassName={classes.activeRoute}>
              <RandomText
                text={link.text}
                tagType='a'
                fontHeight={fontHeight}
                width={link.text.length * fontHeight / 2}
                animationSpeed={1000}
                animationDuration={this.animationDuration}
                animate={this.props.expanded ? 'in' : 'out'} />
            </link.type>
          ))}
        </div>
      </nav>
    )
  }

  _toggleMenu (e) {
    const tagName = e.target.tagName.toLowerCase()
    if ((tagName == 'a' || tagName == 'svg') && !this.state.animating) {
      if (this.props.expanded) {
        this.props.closeMenu()
      } else {
        this.props.expandMenu()
      }
      this.setState({animating: true})
      this.timeouts.push(setTimeout(() => this.setState({animating: false}), this.animationDuration))
    }
  }
}
