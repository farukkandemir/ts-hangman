import styles from "../styles/button.module.css";

const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

type KeyboardProps = {
  isLoser: boolean;
  selectedWord: string;
  guessedLetters: string[];
  setGuessedLetters: React.Dispatch<React.SetStateAction<string[]>>;
};

const Keyboard = ({
  isLoser,
  selectedWord,
  guessedLetters,
  setGuessedLetters,
}: KeyboardProps) => {
  const addLetter = (letter: string) => {
    if (guessedLetters.includes(letter)) {
      return;
    }
    return setGuessedLetters((prevLetters) => [...prevLetters, letter]);
  };

  const getLetterStyle = (key: string) => {
    const isLetterGuessed = guessedLetters.includes(key);
    const isLetterCorrect = selectedWord.split("").includes(key);

    if (isLetterGuessed) {
      return isLetterCorrect ? styles.correct : styles.incorrect;
    }

    return "";
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
        gap: "1rem",
      }}
    >
      {KEYS.map((key, index) => (
        <button
          key={index}
          className={`${styles.btn} ${getLetterStyle(key)} ${
            isLoser && styles.incorrect
          }`}
          onClick={() => addLetter(key)}
        >
          {key}
        </button>
      ))}
    </div>
  );
};

export default Keyboard;
