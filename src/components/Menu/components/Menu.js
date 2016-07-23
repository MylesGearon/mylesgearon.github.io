import React from 'react'

import Header from './Header.js'
import Pulldown from './Pulldown.js'

const menuStyleBreakpoint = 700

export default class Menu extends React.Component {
  render () {
    return (
      <div>
        <Header
          breakpoint={menuStyleBreakpoint} />
        <Pulldown
          breakpoint={menuStyleBreakpoint} />
      </div>
    )
  }
}

export default Menu
