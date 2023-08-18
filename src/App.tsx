import { useState } from "react";
import HangmanDrawing from "./components/HangmanDrawing";
import HangmanWord from "./components/HangmanWord";
import Keyboard from "./components/Keyboard";
import words from "./data/wordList.json";
import { getRandomWord } from "./utils";

const App = () => {
  const [selectedWord, setSelectedWord] = useState(() => getRandomWord(words));
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetters.filter(
    (letter) => !selectedWord.includes(letter)
  );

  const isLoser = incorrectLetters.length >= 6;
  const isWinner = selectedWord
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        display: "flex",
        gap: "2rem",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ display: " flex", flexDirection: "column" }}>
        {isLoser && <p>You Lose. Refresh to play again</p>}
        {isWinner && <p>Winner. Refresh to play again</p>}
      </div>

      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord
        isLoser={isLoser}
        selectedWord={selectedWord}
        guessedLetters={guessedLetters}
      />
      <div style={{ alignSelf: "stretch" }}>
        <Keyboard
          selectedWord={selectedWord}
          isLoser={isLoser}
          guessedLetters={guessedLetters}
          setGuessedLetters={setGuessedLetters}
        />
      </div>
    </div>
  );
};

export default App;
