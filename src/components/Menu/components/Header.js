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
      '/about',
      '/projects'
    ]
  }

  render () {
    const scrollable = this.scrollableRoutes.filter(route =>
      this.props.path.indexOf(route) !== -1
    ).length > 0
    return (
      <header
        className={classes.header +
          (scrollable ? ' ' + classes.scrollable : '')}>
        <IndexLink to='/'
          className={classes.headerLink}
          activeClassName={classes.activeRoute}>
          <nav role='navigation'>
            <Isvg
              src={EmbeddingLogo}
              wrapper={React.DOM.div}
              className={classes.logoContainer}>
              {/* Fallback link */}
              <img
                alt='Myles Gearon Logo'
                src={FallbackLogo} />
            </Isvg>
          </nav>
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
      </header>
    )
  }
}
