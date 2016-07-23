import React from 'react'

import Header from './Header.js'
import Pulldown from './Pulldown.js'

const menuStyleBreakpoint = 700

export const Menu = () => (
  <div>
    <Header
      breakpoint={menuStyleBreakpoint} />
    <Pulldown
      breakpoint={menuStyleBreakpoint} />
  </div>
)

export default Menu
