import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  word: {
    display: "flex",
    justifyContent: "center",
    margin: theme.spacing(2),
  },
  letter: {
    padding: theme.spacing(1),
  },
}));

const Word = ({ word, guessedLetters }) => {
  const classes = useStyles();

  return (
    <div className={classes.word}>
      {/* use Array.map to create an array of letters */}
      {word.split("").map((letter, index) => {
        return (
          <Typography key={index} variant="h5" className={classes.letter}>
            {guessedLetters.includes(letter) ? letter : "_"}
          </Typography>
        );
      })}
    </div>
  );
};

export default Word;
