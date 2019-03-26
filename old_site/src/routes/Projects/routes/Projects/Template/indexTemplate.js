import React from 'react'
import { connect } from 'react-redux'

export default (folderName, path) => store => ({
  path,
  getComponent (nextState, cb) {
    require.ensure([], require => {
      const template = require('./componentTemplate').default
      const props = require(`../${folderName}/component`).default

      const mapStateToProps = state => ({
        curBreakpoint: state.breakpoint.current,
        ...props
      })

      cb(null, connect(mapStateToProps, {})(template))
    })
  }
})
