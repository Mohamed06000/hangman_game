import './App.css';
import React, { Component } from 'react'
import shuffle from 'lodash.shuffle'

import Letter from './Letter'


const SIDE = 13
const LETTER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

class App extends Component{


    state = {
        letters: this.generateLetters(),
        currentPair: [],
        guesses: 0,
        matchedCardIndices: [],
    }

    generateLetters() {
        const result = []
        const size = SIDE * SIDE
        const candidates = shuffle(LETTER)
        while (result.length < size) {
            const card = candidates.pop()
            result.push(card)
        }
        return shuffle(result)
    }

  computeDisplay(phrase, usedLetters) {
    return phrase.replace(/\w/g,
        (letter) => (usedLetters.has(letter) ? letter : '_')
    )}

    handleCardClick = index => {
        console.log("Clicked")
    }

    render() {
        const { letters, matchedCardIndices } = this.state
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
            </div>
        )
    }
}

export default App;
