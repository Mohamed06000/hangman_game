import React from 'react'
import PropTypes from 'prop-types'

import './Letter.css'

const HIDDEN_SYMBOL = '_'

const Letter = ({ letter, feedback, index, onClick}) => (
    <div className={`card ${feedback}`} onClick={() => onClick(index)}>
    <span className="symbol">
      {feedback === 'hidden' ? HIDDEN_SYMBOL : letter}
    </span>
    </div>
)

Letter.propTypes = {
    letter: PropTypes.string.isRequired,
    feedback: PropTypes.oneOf([
        'hidden',
        'justMatched',
        'justMismatched',
        'visible',
    ]).isRequired,
    index: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default Letter
