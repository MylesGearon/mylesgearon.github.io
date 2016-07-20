import React from 'react'
import MediaQuery from 'react-responsive'

import classes from '../styles/Pulldown.scss'

export const Pulldown = props => (
  <MediaQuery
    minWidth={props.breakpoint + 1}
    className={classes.header}>
    Hello world
  </MediaQuery>
)

Pulldown.propTypes = {
  breakpoint: React.PropTypes.number.isRequired
}

export default Pulldown
