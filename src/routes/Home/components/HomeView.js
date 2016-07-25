import React from 'react'
import RandomText from '../../../components/RandomText'

export const HomeView = () => (
  <div>
    <RandomText
      text="Hi, I'm Myles"
      width={200}
      fontHeight={50}
      animationSpeed={1000}
      animationDuration={2000}
      animate='in' />
  </div>
)

export default HomeView
