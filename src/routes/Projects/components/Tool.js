import React from 'react'
import Isvg from 'react-inlinesvg'

import classes from './Tool.scss'

const p = React.PropTypes

export default class Tool extends React.Component {

  static propTypes = {
    className: p.string,
    icon: p.string.isRequired,
    show: p.bool.isRequired,
    isSvg: p.bool
  }

  render () {
    return (
      <div
        className={
          classes.container +
          (this.props.className ? ' ' + this.props.className : '') +
          (this.props.show ? ' ' + classes.active : '')
        }>

        {this.props.isSvg !== false
          ? <Isvg
            className={classes.image}
            src={require('../assets/' + this.props.icon + '.svg')}
            alt={this.props.icon}
            wrapper={React.DOM.div}>
            {this.props.icon}
          </Isvg>
          : <img
            className={classes.image}
            src={require('../assets/' + this.props.icon + '.png')}
            alt={this.props.icon}
          />
        }

        <p className={classes.title}>
          {this.props.icon}
        </p>

      </div>
    )
  }

}
