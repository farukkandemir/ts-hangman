type HangmanWordProps = {
  selectedWord: string;
  guessedLetters: string[];
  isLoser: boolean;
};

type VisibilityType = "visible" | "hidden";

type LetterStatusType = {
  visibilityStatus: VisibilityType;
  color: string;
};

const HangmanWord = ({
  selectedWord,
  guessedLetters,
  isLoser,
}: HangmanWordProps) => {
  const getLetterStatus = (letter: string): LetterStatusType => {
    const unguessedLetter =
      selectedWord.includes(letter) && !guessedLetters.includes(letter);

    if (isLoser && unguessedLetter) {
      return { visibilityStatus: "visible", color: "red" };
    }

    return guessedLetters.includes(letter)
      ? { visibilityStatus: "visible", color: "green" }
      : { visibilityStatus: "hidden", color: "transparent" };
  };

  return (
    <div>
      <div
        style={{
          fontWeight: "bold",
          fontSize: "4rem",
          textTransform: "uppercase",
          display: "flex",
          gap: ".25em",
        }}
      >
        {selectedWord.split("").map((letter, index) => {
          const { visibilityStatus, color } = getLetterStatus(letter);

          return (
            <span key={index} style={{ borderBottom: ".1em solid black" }}>
              <span
                style={{
                  visibility: visibilityStatus,
                  color: color,
                }}
              >
                {letter}
              </span>
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default HangmanWord;
