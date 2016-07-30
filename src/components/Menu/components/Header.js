import React from 'react'
import Isvg from 'react-inlinesvg'
import { IndexLink, Link } from 'react-router'

import classes from '../styles/Header.scss'

import EmbeddingLogo from '../assets/embeddingLogo.svg'
import FallbackLogo from '../assets/logo.svg'

const p = React.PropTypes

export default class Header extends React.Component {

  static propTypes = {
    path: p.string.isRequired
  }

  constructor () {
    super()
    this.scrollableRoutes = [
      '/about'
    ]
  }

  render () {
    return (
      <div
        className={classes.header +
          (this.scrollableRoutes.indexOf(this.props.path) !== -1
            ? ' ' + classes.scrollable
            : ''
          )
      }>
        <IndexLink to='/'
          className={classes.headerLink}
          activeClassName={classes.activeRoute}>
          <Isvg
            src={EmbeddingLogo}
            wrapper={React.DOM.div}
            className={classes.logoContainer}>
            {/* Fallback link */}
            <img
              alt='Myles Gearon Logo'
              src={FallbackLogo} />
          </Isvg>
        </IndexLink>
        <Link
          to='/about'
          className={classes.headerLink + ' ' + classes.textLink}
          activeClassName={classes.activeRoute}>
          About
        </Link>
        <Link
          to='/projects'
          className={classes.headerLink + ' ' + classes.textLink}
          activeClassName={classes.activeRoute}>
          Projects
        </Link>
        <Link
          to='/contact'
          className={classes.headerLink + ' ' + classes.textLink}
          activeClassName={classes.activeRoute}>
          Contact
        </Link>
      </div>
    )
  }
}
