import React from 'react'
import Menu from '../../components/Menu'
import classes from './CoreLayout.scss'
import '../../styles/core.scss'

export const CoreLayout = (children, store) => (
  <div className={classes.container}>
    <Menu store={store} />
    <div className={classes.mainContainer}>
      {children}
    </div>
  </div>
)

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default (store) => {
  return (router) => CoreLayout(router.children, store)
}
