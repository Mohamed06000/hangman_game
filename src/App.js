import './App.css';
import React, { Component } from 'react'

import Letter from './Letter'


const SIDE = 6
const LETTER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const WORD = 'Hello'


    class App extends Component{


    state = {
        letters: this.generateLetters(),
        usedLetters: [],
        matchedCardIndices: [],
        wordHidden: this.hiddenWord(),
    }

    hiddenWord() {
        const len = WORD.length
        let result = ''
        for (let i = 0; i < len; i++) {
            result = result + '_'
        }

        return result
    }

    generateLetters() {
        const result = []
        const size = SIDE * SIDE
        const candidates = LETTER.split('')
        while (result.length < size) {
            const card = candidates.shift()
            result.push(card)
        }
        return result
    }

  computeDisplay(phrase, usedLetters) {
    return phrase.replace(/\w/g,
        (letter) => (usedLetters.has(letter) ? letter : '_')
    )}

    replaceInd(str, index, replacement) {
        return str.substr(0, index) + replacement + str.substr(index + replacement.length);
    }


    handleCardClick = index => {
        const { letters, wordHidden, matchedCardIndices } = this.state
        console.log("clicked",letters[index])

        const matched = WORD.toUpperCase().includes(letters[index])

        if (matched) {
            const ind = WORD.toUpperCase().indexOf(letters[index])
            this.setState({wordHidden: this.replaceInd(wordHidden, ind, letters[index])})
            console.log('yes')
        }
        else {
            console.log('no')
        }
    }

    render() {
        const { letters, matchedCardIndices, wordHidden } = this.state
        const won = matchedCardIndices.length === letters.length
        return (
            <div className="hangman">
                {letters.map((letter,index) => (
                        <Letter
                            letter={letter}
                            feedback={'visible'}
                            key={index}
                            index={index}
                            onClick={this.handleCardClick}
                        />
                    )
                )}

                {wordHidden}
            </div>
        )
    }
}

export default App;
