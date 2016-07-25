import React from 'react'
import Isvg from 'react-inlinesvg'
import RandomText from '../../RandomText'
import { IndexLink, Link } from 'react-router'

import classes from '../styles/Pulldown.scss'

import EmbeddingLogo from '../assets/embeddingLogo.svg'
import FallbackLogo from '../assets/logo.svg'

export default class Pulldown extends React.Component {
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
      <div>
        <Isvg
          src={EmbeddingLogo}
          wrapper={React.DOM.div}
          className={classes.logo}>
          {/* Fallback link */}
          <img
            alt='Myles Gearon Logo'
            src={FallbackLogo} />
        </Isvg>
        <div
          className={classes.linkContainer}
          style={{
            width: links.reduce((a, b) => a.text.length > b.text.length ? a : b).text.length * fontHeight / 2
          }}>
          {links.map((link, ind) => (
            <link.type
              to={link.type === IndexLink ? '/' : `/${link.text.toLowerCase()}`}
              key={ind}
              style={{width: link.text.length * fontHeight / 2}}
              className={classes.link}
              activeClassName={classes.activeRoute}>
              <RandomText
                text={link.text}
                fontHeight={fontHeight}
                width={link.text.length * fontHeight}
                animationSpeed={1000}
                animationDuration={2000}
                animate='in' />
            </link.type>
          ))}
        </div>
      </div>
    )
  }
}
