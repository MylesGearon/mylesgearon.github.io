import React from 'react'
const p = React.PropTypes

import Letter from './Letter'

export default class TextContainer extends React.Component {

  static propTypes = {
    text: p.string.isRequired,
    width: p.number.isRequired,
    // Sets font-size
    fontHeight: p.number.isRequired,
    // Duration of each letter's fade in animation
    animationSpeed: p.number.isRequired,
    // Additional Letter animation start time offset is product of this and animationSpeed
    animationRandomness: p.number,
    // Total animation duration (not counting randomness factor)
    animationDuration: p.number.isRequired,
    animate: p.oneOf(['in', 'out'])
  }

  constructor () {
    super()
    this.state = {
      numRows: null,
      chars: null
    }
  }

  componentDidMount () {
    this.setState(this._mapCharPositions(this.props.text))
  }

  shouldComponentUpdate (nextProps, nextState) {
    return nextProps.animate !== this.props.animate || this.state.numRows === null
  }

  // returns an array of chars w/ form [x, y, char]
  _mapCharPositions (text) {
    const fontWidth = this.props.fontHeight / 2
    const charsPerRow = Math.floor(this.props.width / fontWidth)
    const emptySpaceInRow = this.props.width - charsPerRow * fontWidth
    const margin = emptySpaceInRow / (charsPerRow + 1)
    const chars = []

    let textLength = text.length
    for (let i = 0; i < textLength; i++) {
      const col = i % charsPerRow

      // Don't push spaces into the array, and if there is a space at the
      // beginning of a line, remove it from the original text and put the next
      // character in its place
      if (text[i] === ' ') {
        if (col === 0) {
          text = text.slice(0, i) + text.slice(i + 1)
          i--
          textLength--
        }
      } else {
        chars.push([
          col * fontWidth + margin * (col + 1),
          Math.floor(i / charsPerRow) * this.props.fontHeight,
          text[i]
        ])
      }
    }
    const numRows = Math.ceil(textLength / charsPerRow)
    return {numRows, chars}
  }

  render () {
    if (this.state.chars == null) {
      return null
    } else {
      return (
        <div
          style={{
            height: this.state.numRows * this.props.fontHeight,
            width: this.props.width
          }}>
          {this.state.chars.map((char, i) => {
            return (
              <Letter
                x={char[0]}
                y={char[1]}
                char={char[2]}
                fontHeight={this.props.fontHeight}
                numKeyframes={20}
                key={i}
                animate={this.props.animate}
                animationSpeed={this.props.animationSpeed}
                animationRandomness={this.props.animationRandomness || 1}
                animationStart={
                  (this.props.animationDuration - this.props.animationSpeed) /
                  this.state.chars.length * i}
              ></Letter>
            )
          })})
        </div>
      )
    }
  }

}