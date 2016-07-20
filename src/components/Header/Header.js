import React from 'react'
import Isvg from 'react-inlinesvg'
import { IndexLink, Link } from 'react-router'

import EmbeddingLogo from './assets/embeddingLogo.svg'
import FallbackLogo from './assets/logo.svg'
import classes from './Header.scss'

export const Header = () => (
  <div className={classes.header}>
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
      to='/counter'
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

export default Header
