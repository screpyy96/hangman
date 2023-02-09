import React, { useState, useEffect } from "react";
import Letters from "./components/letters/letters";
import Hangman from "./components/hangman/hangman";
import Word from "./components/word/word";
import Hints from "./components/hints/hints";
import TryAgain from "./components/tryagain/try-again";
import useWords from "./components/use-words/use-words";
import { Paper, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: theme.spacing(2),
  },
  hangmanContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  wordContainer: {
    display: "flex",
    justifyContent: "center",
    margin: theme.spacing(2),
  },
  letter: {
    padding: theme.spacing(1),
  },
  hintsContainer: {
    display: "flex",
    justifyContent: "center",
    margin: theme.spacing(2),
  },
  incorrectGuessesContainer: {
    display: "flex",
    justifyContent: "center",
    margin: theme.spacing(2),
  },
  tryAgainContainer: {
    display: "flex",
    justifyContent: "center",
    margin: theme.spacing(2),
  },
}));

const App = () => {
  const [word, setWord] = useState("");
  const [stage, setStage] = useState(1);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [incorrectGuesses, setIncorrectGuesses] = useState([]);
  const [hints, setHints] = useState(3);
  const words = useWords();

  const classes = useStyles();

  // get a random word from the words array
  useEffect(() => {
    if (words.length > 0) {
      setWord(words[Math.floor(Math.random() * words.length)]);
    }
  }, [words]);

  // check if the game is over
  const handleLetterClick = (letter) => {
    if (!word.includes(letter)) {
      setIncorrectGuesses(incorrectGuesses.concat(letter));
      setStage(stage + 1);
    } else {
      setGuessedLetters(guessedLetters.concat(letter));
    }
  };

  // reset the game
  const handleTryAgain = () => {
    setWord(words[Math.floor(Math.random() * words.length)]);
    setStage(1);
    setGuessedLetters([]);
    setIncorrectGuesses([]);
    setHints(3);
    if (stage >= 11) {
      window.alert("You lost. Try again!");
    } else if (
      word.split("").every((letter) => guessedLetters.includes(letter))
    ) {
      window.alert("You won!");
    }
  };

  // hint function to show a letter
  const handleHintClick = () => {
    if (hints > 0) {
      const hintIndex = word
        .split("")
        .findIndex((letter) => !guessedLetters.includes(letter));
      const hintLetter = word[hintIndex];
      setGuessedLetters(guessedLetters.concat(hintLetter));
      setHints(hints - 1);
    }
  };

  return (
    <Paper className={classes.container}>
      <div className={classes.hangmanContainer}>
        <Hangman stage={stage} />
      </div>
      <div className={classes.wordContainer}>
        <Word word={word} guessedLetters={guessedLetters} />
      </div>
      {stage >= 11 ? (
        <Typography variant="h5">You lose!</Typography>
      ) : (
        <Letters handleLetterClick={handleLetterClick} />
      )}
      <div className={classes.hintsContainer}>
        <Hints
          incorrectGuesses={incorrectGuesses}
          hints={hints}
          handleHintClick={handleHintClick}
        />
      </div>
      <Typography className={classes.incorrectGuessesContainer}>
        Incorrect Guesses: {incorrectGuesses.join(", ")}
      </Typography>
      <div className={classes.tryAgainContainer}>
        <TryAgain handleTryAgain={handleTryAgain} />
      </div>
    </Paper>
  );
};

export default App;
