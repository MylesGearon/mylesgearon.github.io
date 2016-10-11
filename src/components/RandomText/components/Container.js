import bowser from 'bowser'
import React from 'react'
const p = React.PropTypes

import Letter from './Letter'
import classes from '../randomText.scss'

export default class TextContainer extends React.Component {

  static propTypes = {
    text: p.string.isRequired,
    tagType: p.string,
    className: p.string,
    width: p.number.isRequired,
    // Sets font-size
    fontHeight: p.number.isRequired,
    // Duration of each letter's fade in animation
    animationSpeed: p.number.isRequired,
    // Additional Letter animation start time offset is product of this and animationSpeed
    animationRandomness: p.number,
    // Total animation duration (not counting randomness factor)
    animationDuration: p.number.isRequired,
    animate: p.oneOf(['in', 'out']),
    homePage: p.bool
  }

  constructor () {
    super()
    this.state = {
      numRows: null,
      chars: null,
      updated: false
    }
  }

  componentDidMount () {
    this.setState(this._mapCharPositions(this.props))
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.fontHeight !== this.props.fontHeight || nextProps.width !== this.props.width) {
      this.setState(this._mapCharPositions(nextProps))
    }
  }

  shouldComponentUpdate (nextProps, nextState) {
    if (this.state.updated) {
      this.setState({updated: false})
      return true
    }
    return (
      nextProps.animate !== this.props.animate ||
      this.state.chars === null
    )
  }

  // returns an array of chars w/ form [x, y, char]
  _mapCharPositions (props) {
    const fontWidth = props.fontHeight / 2
    const charsPerRow = Math.floor(props.width / fontWidth)
    const emptySpaceInRow = props.width - charsPerRow * fontWidth
    const margin = emptySpaceInRow / (charsPerRow + 1)
    const chars = []
    let text = props.text.trim()
    let textLength = text.length

    let firstLetterOfWord = true
    for (let i = 0; i < textLength; i++) {
      const col = i % charsPerRow

      // Don't push spaces into the array, and if there is a space at the
      // beginning of a line, remove it from the original text and put the next
      // character in its place
      if (text[i] === ' ') {
        firstLetterOfWord = true
        if (col === 0) {
          text = text.slice(0, i) + text.slice(i + 1)
          i--
          textLength--
        }
      } else {
        // Handle text wrapping
        if (firstLetterOfWord) {
          let wordLength = 1
          let wordCounter = 1
          while (i + wordCounter < text.length && text[i + wordCounter] !== ' ') {
            wordLength++
            wordCounter++
          }
          firstLetterOfWord = false

          const charsLeftInRow = charsPerRow - col
          const indOfLastCharInRow = i + charsLeftInRow
          // If the word is too long to fit on one line hyphenate it
          if (wordLength > charsPerRow) {
            text = text.slice(0, indOfLastCharInRow - 1) + '-' + text.slice(indOfLastCharInRow - 1)
            textLength++
          }
          // Else insert spaces and adjust textLength to skip the word to the next line
          else if (wordLength > charsLeftInRow) {
            text = text.slice(0, i) + ' '.repeat(wordLength) + text.slice(i)
            textLength += wordLength
          }
        }
        // Push the char at i into the return arr
        chars.push([
          col * fontWidth + margin * (col + 1), // x
          Math.floor(i / charsPerRow) * props.fontHeight, // y
          text[i]
        ])
      }
    }
    const numRows = Math.ceil(textLength / charsPerRow)
    return {numRows, chars, updated: true}
  }

  render () {
    const tagType = this.props.tagType || 'div'
    if (this.state.chars == null) {
      return null
    } else if (bowser.ios && !this.props.homePage) { // There's a terrible rendering bug in ios for some reason :/
      return (
        <tagType
          className={classes.container + ' ' + this.props.className}
          style={{
            height: 'auto',
            width: this.props.width,
            textAlign: 'center',
            fontFamily: 'Inconsolata, monospace',
            lineHeight: '1',
            fontSize: this.props.fontHeight,
            color: 'white'
          }}>{this.props.text}</tagType>
        )
    } else {
      return (
        <div
          className={classes.container + ' ' + this.props.className}
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
                i={i}
                textLen={this.props.text.length}
                animate={this.props.animate}
                animationSpeed={this.props.animationSpeed}
                animationRandomness={this.props.animationRandomness !== undefined ? this.props.animationRandomness : 1}
                animationStart={
                  (this.props.animationDuration - this.props.animationSpeed) /
                  this.state.chars.length * i}
              ></Letter>
            )
          })}
        </div>
      )
    }
  }

}
