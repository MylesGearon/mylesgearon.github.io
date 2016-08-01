import React from 'react'

import classes from '../ViewWrapper.scss'

export const View = props => {
  return (
    <div>
      <div className={classes.background} />
      <main className={classes.mainContainer + (props.className ? ' ' + props.className : '')}>{props.children}</main>
    </div>
  )
}

export default View
