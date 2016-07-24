import React from 'react'
import Isvg from 'react-inlinesvg'
import { IndexLink, Link } from 'react-router'

import classes from '../styles/Pulldown.scss'

import EmbeddingLogo from '../assets/embeddingLogo.svg'
import FallbackLogo from '../assets/logo.svg'

export const Pulldown = props => (
  <div
    className={classes.container}>
    <Isvg
      src={EmbeddingLogo}
      wrapper={React.DOM.div}
      className={classes.logo}>
      {/* Fallback link */}
      <img
        alt='Myles Gearon Logo'
        src={FallbackLogo} />
    </Isvg>
  </div>
)

export default Pulldown
