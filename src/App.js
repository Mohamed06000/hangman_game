import './App.css';

function App() {

  const Letter = ({ letter, feedback, index, onClick}) => (
      <div className={`letter ${feedback}`} onClick={() => onClick(index)}>
      <span className="symbol">
      </span>
      </div>
  )

  function computeDisplay(phrase, usedLetters) {
    return phrase.replace(/\w/g,
        (letter) => (usedLetters.has(letter) ? letter : '_')
    )}




  return (
    <div className="hangman">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
