import React from 'react'

import View from '../../../components/ViewWrapper'
import RandomText from '../../../components/RandomText'

import classes from '../ContactView.scss'

const p = React.PropTypes

export default class ContactView extends React.Component {

  static propTypes = {
    curBreakpoint: p.oneOfType([p.number, p.object]).isRequired
  }

  constructor () {
    super()
    this.state = {
      showContact: [false, false, false, false]
    }
    this.sizesByBreakpoint = {
      0: {
        fontHeight: 20
      },
      1: {
        fontHeight: 25
      },
      2: {
        fontHeight: 25
      },
      3: {
        fontHeight: 25
      },
      4: {
        fontHeight: 35
      },
      5: {
        fontHeight: 35
      }
    }
    this.timeouts = []
  }

  componentDidMount () {
    this.state.showContact.forEach((row, i) => {
      this.timeouts.push(setTimeout(() => {
        const showContact = this.state.showContact
        showContact[i] = true
        this.setState({showContact})
      }, i * 700))
    })
  }

  componentWillUnmount () {
    this.timeouts.forEach(timeoutId => clearTimeout(timeoutId))
  }

  render () {
    const links = [
      {
        text: 'myles@mylesgearon.com',
        href: 'mailto:myles@mylesgearon.com'
      },
      {
        text: '(773) 234-4355',
        href: 'tel:1-773-234-4355'
      },
      {
        text: 'github.com/mityadsch',
        href: 'http://github.com/mityadsch'
      },
      {
        text: 'codepen.io/mityadsch',
        href: 'http://codepen.io/mityadsch'
      }
    ]
    const fontHeight = this.sizesByBreakpoint[this.props.curBreakpoint].fontHeight
    return (
      <View className={classes.container}>
        <div className={classes.linkContainer}>
          {links.map((link, i) => (
            <div
              className={
                classes.row +
                (this.state.showContact[i] ? ' ' + classes.active : '')
              }
              key={i}>
              <a href={link.href} target='_blank'>
                <RandomText
                  text={link.text}
                  fontHeight={fontHeight}
                  width={fontHeight / 2 * link.text.length}
                  animationSpeed={700}
                  animationDuration={1000}
                  animate={(this.state.showContact[i] ? 'in' : 'out')} />
              </a>
            </div>
          ))}
        </div>
      </View>
    )
  }
}
