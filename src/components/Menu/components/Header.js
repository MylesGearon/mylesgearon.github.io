import React from 'react'
import Isvg from 'react-inlinesvg'
import { IndexLink, Link } from 'react-router'
import MediaQuery from 'react-responsive'

import classes from '../styles/Header.scss'

import EmbeddingLogo from '../assets/embeddingLogo.svg'
import FallbackLogo from '../assets/logo.svg'

export const Header = props => (
  <MediaQuery
    maxWidth={props.breakpoint}
    className={classes.header}>
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
  </MediaQuery>
)

Header.propTypes = {
  breakpoint: React.PropTypes.number.isRequired
}

export default Header
